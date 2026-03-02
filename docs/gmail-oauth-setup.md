# Gmail OAuth2 Refresh Token Kurulumu

Archivor user factory için Gmail API ile aktivasyon maillerini okumak üzere OAuth2 credentials gereklidir.

## Adım 1: Google Cloud Console Projesi

1. [Google Cloud Console](https://console.cloud.google.com/) → **Select a project** → **New Project**
2. Proje adı: `archivor-automation` (veya istediğiniz)
3. **Create** tıklayın

## Adım 2: Gmail API Etkinleştirme

1. Sol menü → **APIs & Services** → **Library**
2. "Gmail API" arayın
3. **Gmail API** → **Enable** tıklayın

## Adım 3: OAuth Consent Screen

1. **APIs & Services** → **OAuth consent screen**
2. **External** seçin (test için) → **Create**
3. Uygulama adı: `Archivor Test Automation`
4. User support email: kendi Gmail adresiniz
5. Developer contact: kendi email
6. **Save and Continue** → Scopes → **Add or Remove Scopes**
7. `https://www.googleapis.com/auth/gmail.readonly` ekleyin
8. **Save and Continue** → Test users → **Add Users** → `archiver.automation@gmail.com` ekleyin
9. **Save and Continue**

## Adım 4: OAuth2 Credentials

1. **APIs & Services** → **Credentials** → **Create Credentials** → **OAuth client ID**
2. Application type: **Desktop app**
3. Name: `Archivor Gmail Client`
4. **Create** → Client ID ve Client Secret kopyalayın

## Adım 5: Refresh Token Alma

Refresh token almak için bir kerelik authorization flow gerekir:

```bash
# Node ile (npx ile çalıştırın)
npx ts-node scripts/get-gmail-refresh-token.ts
```

Veya manuel olarak:

1. Aşağıdaki URL'yi tarayıcıda açın (CLIENT_ID'yi kendi değerinizle değiştirin):

```
https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=https://www.googleapis.com/auth/gmail.readonly&access_type=offline&prompt=consent
```

2. Gmail hesabıyla giriş yapın (archiver.automation@gmail.com)
3. İzin verin
4. Tarayıcıda gösterilen **authorization code**'u kopyalayın
5. Code ile token exchange:

```bash
curl -X POST https://oauth2.googleapis.com/token \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "code=YOUR_AUTH_CODE" \
  -d "grant_type=authorization_code" \
  -d "redirect_uri=urn:ietf:wg:oauth:2.0:oob"
```

6. Response'taki `refresh_token` değerini `.env` dosyasına ekleyin

## Adım 6: .env Yapılandırması

```env
GMAIL_CLIENT_ID=your_client_id.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=your_client_secret
GMAIL_REFRESH_TOKEN=your_refresh_token
```

## Test

```bash
npm run test:api
# veya user factory için:
npx playwright test tests/smoke/user-factory.spec.ts --project=chromium-unauth
```
