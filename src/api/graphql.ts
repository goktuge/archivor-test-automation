import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: { input: bigint|number; output: bigint|number; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export enum ActionEnum {
  CollectionCreate = 'COLLECTION_CREATE',
  CollectionDelete = 'COLLECTION_DELETE',
  CollectionFileAdd = 'COLLECTION_FILE_ADD',
  CollectionFileRemove = 'COLLECTION_FILE_REMOVE',
  CollectionUpdate = 'COLLECTION_UPDATE',
  EmptyTrash = 'EMPTY_TRASH',
  FileDelete = 'FILE_DELETE',
  FileMoveToTrash = 'FILE_MOVE_TO_TRASH',
  FileUpload = 'FILE_UPLOAD',
  FolderCreate = 'FOLDER_CREATE',
  FolderCreateOnUpload = 'FOLDER_CREATE_ON_UPLOAD',
  FolderMove = 'FOLDER_MOVE',
  FolderMoveAndMerge = 'FOLDER_MOVE_AND_MERGE',
  FolderMoveToTrash = 'FOLDER_MOVE_TO_TRASH',
  FolderRename = 'FOLDER_RENAME',
  InvitationAccept = 'INVITATION_ACCEPT',
  OrganizationCreate = 'ORGANIZATION_CREATE',
  OrganizationMemberCreate = 'ORGANIZATION_MEMBER_CREATE',
  OrganizationMemberDelete = 'ORGANIZATION_MEMBER_DELETE',
  OrganizationMemberUpdate = 'ORGANIZATION_MEMBER_UPDATE',
  OrganizationUpdate = 'ORGANIZATION_UPDATE',
  ShareableLinkCreate = 'SHAREABLE_LINK_CREATE',
  ShareableLinkDelete = 'SHAREABLE_LINK_DELETE',
  SignIn = 'SIGN_IN',
  SignOut = 'SIGN_OUT',
  SignUp = 'SIGN_UP',
  TeamCreate = 'TEAM_CREATE',
  TeamDelete = 'TEAM_DELETE',
  TeamMemberCreate = 'TEAM_MEMBER_CREATE',
  TeamMemberDelete = 'TEAM_MEMBER_DELETE',
  TeamMemberUpdate = 'TEAM_MEMBER_UPDATE',
  TeamUpdate = 'TEAM_UPDATE'
}

export type ActivityLog = ActivityLogInterface & {
  __typename?: 'ActivityLog';
  action: ActionEnum;
  createdAt: Scalars['BigInt']['output'];
  entity?: Maybe<EntityUnion>;
  groupCount: Scalars['Int']['output'];
  groupItems: Array<ActivityLog>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type ActivityLogAttachment = {
  __typename?: 'ActivityLogAttachment';
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
};

export type ActivityLogCollection = {
  __typename?: 'ActivityLogCollection';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for ActivityLog. */
export type ActivityLogConnection = {
  __typename?: 'ActivityLogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ActivityLogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ActivityLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ActivityLogEdge = {
  __typename?: 'ActivityLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ActivityLog>;
};

export type ActivityLogFolder = {
  __typename?: 'ActivityLogFolder';
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type ActivityLogInterface = {
  action: ActionEnum;
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type ActivityLogOrganization = {
  __typename?: 'ActivityLogOrganization';
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type ActivityLogTeam = {
  __typename?: 'ActivityLogTeam';
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type ActivityLogTeamMember = {
  __typename?: 'ActivityLogTeamMember';
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
};

export type ActivityLogUser = {
  __typename?: 'ActivityLogUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type Attachment = AttachmentInterface & {
  __typename?: 'Attachment';
  byteSize?: Maybe<Scalars['BigInt']['output']>;
  collectionsCount?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  favoriteId?: Maybe<Scalars['ID']['output']>;
  fileType: FileTypeEnum;
  hasChildren: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isFavored: Scalars['Boolean']['output'];
  meta?: Maybe<AttachmentMeta>;
  name: Scalars['String']['output'];
  /** The original path of the file in case of being trashed. */
  originalPath?: Maybe<Scalars['String']['output']>;
  previewUrl?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['BigInt']['output'];
  versionsCount?: Maybe<Scalars['Int']['output']>;
};

/** The connection type for Attachment. */
export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AttachmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Attachment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Attachment>;
};

export type AttachmentInterface = {
  byteSize?: Maybe<Scalars['BigInt']['output']>;
  collectionsCount?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdBy: AttachmentUser;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  favoriteId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isFavored: Scalars['Boolean']['output'];
  meta?: Maybe<AttachmentMeta>;
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type AttachmentMeta = {
  __typename?: 'AttachmentMeta';
  pageCount?: Maybe<Scalars['Int']['output']>;
  slideCount?: Maybe<Scalars['Int']['output']>;
};

export type AttachmentMetadata = {
  __typename?: 'AttachmentMetadata';
  id: Scalars['ID']['output'];
  namespace: Scalars['String']['output'];
  tagName: Scalars['String']['output'];
  value: Scalars['String']['output'];
  valueType: MetadataValueTypeEnum;
};

export type AttachmentMonthlyStats = {
  __typename?: 'AttachmentMonthlyStats';
  date: Scalars['BigInt']['output'];
  downloadCount: Scalars['BigInt']['output'];
};

export type AttachmentShow = AttachmentInterface & {
  __typename?: 'AttachmentShow';
  byteSize?: Maybe<Scalars['BigInt']['output']>;
  collectionsCount?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  dimensions?: Maybe<Array<Scalars['Int']['output']>>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  favoriteId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isFavored: Scalars['Boolean']['output'];
  meta?: Maybe<AttachmentMeta>;
  metadata?: Maybe<Array<AttachmentMetadata>>;
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  stats: AttachmentStats;
  tags?: Maybe<Array<AttachmentTag>>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['BigInt']['output'];
  versions: Array<AttachmentVersion>;
};

export enum AttachmentSortByEnum {
  ByteSize = 'BYTE_SIZE',
  CreatedAt = 'CREATED_AT',
  FileType = 'FILE_TYPE',
  Name = 'NAME',
  UpdatedAt = 'UPDATED_AT'
}

export type AttachmentStats = {
  __typename?: 'AttachmentStats';
  downloadCount: Scalars['BigInt']['output'];
  monthlyStats: Array<AttachmentMonthlyStats>;
};

export type AttachmentTag = {
  __typename?: 'AttachmentTag';
  aiConfidence?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  instances?: Maybe<Array<AttachmentTagInstance>>;
  isAi: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type AttachmentTagCreate = {
  attachmentId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type AttachmentTagDelete = {
  attachmentId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type AttachmentTagInstance = {
  __typename?: 'AttachmentTagInstance';
  confidence: Scalars['Float']['output'];
  height: Scalars['Float']['output'];
  left: Scalars['Float']['output'];
  top: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type AttachmentUser = {
  __typename?: 'AttachmentUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type AttachmentVersion = {
  __typename?: 'AttachmentVersion';
  attachmentId: Scalars['ID']['output'];
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  isLive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type AttachmentVersionCheckout = {
  attachmentId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** The connection type for AttachmentVersion. */
export type AttachmentVersionConnection = {
  __typename?: 'AttachmentVersionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AttachmentVersionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AttachmentVersion>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AttachmentVersionEdge = {
  __typename?: 'AttachmentVersionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<AttachmentVersion>;
};

export enum AutomationActionKindEnum {
  Integration = 'INTEGRATION',
  Webhook = 'WEBHOOK'
}

export enum AutomationActionStatusEnum {
  Active = 'ACTIVE',
  Paused = 'PAUSED'
}

export type AutomationEventTriggerInput = {
  condition?: InputMaybe<Scalars['String']['input']>;
  eventType: AutomationTriggerEventTypeEnum;
  source: AutomationTriggerSourceEnum;
};

export type AutomationRule = {
  __typename?: 'AutomationRule';
  actions: Array<AutomationRuleAction>;
  createdAt: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  eventTrigger?: Maybe<AutomationRuleEventTrigger>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: AutomationRuleStatusEnum;
  updatedAt: Scalars['BigInt']['output'];
};

export type AutomationRuleAction = {
  __typename?: 'AutomationRuleAction';
  actionType: Scalars['String']['output'];
  condition?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  kind: AutomationActionKindEnum;
  kindId?: Maybe<Scalars['ID']['output']>;
  parameters?: Maybe<AutomationRuleActionParameterUnion>;
  status: AutomationActionStatusEnum;
};

export type AutomationRuleActionParameterUnion = AutomationRuleActionSlackOauth2Parameter | AutomationRuleActionWebhookParameter;

export type AutomationRuleActionSlackOauth2Parameter = {
  __typename?: 'AutomationRuleActionSlackOauth2Parameter';
  channelId: Scalars['String']['output'];
  channelName: Scalars['String']['output'];
  messageTemplate?: Maybe<Scalars['String']['output']>;
};

export type AutomationRuleActionWebhookParameter = {
  __typename?: 'AutomationRuleActionWebhookParameter';
  url: Scalars['String']['output'];
};

export type AutomationRuleCreateInput = {
  actions: Array<AutomationTriggerActionInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventTrigger?: InputMaybe<AutomationEventTriggerInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  scheduleTrigger?: InputMaybe<AutomationScheduleTriggerInput>;
  status: AutomationRuleStatusEnum;
};

export type AutomationRuleDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type AutomationRuleEventTrigger = {
  __typename?: 'AutomationRuleEventTrigger';
  condition?: Maybe<Scalars['String']['output']>;
  eventType: AutomationTriggerEventTypeEnum;
  source: AutomationTriggerSourceEnum;
};

export enum AutomationRuleStatusEnum {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Draft = 'DRAFT'
}

export type AutomationRuleUpdateInput = {
  actions: Array<AutomationTriggerActionInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  eventTrigger?: InputMaybe<AutomationEventTriggerInput>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  scheduleTrigger?: InputMaybe<AutomationScheduleTriggerInput>;
  status: AutomationRuleStatusEnum;
};

export type AutomationScheduleTriggerInput = {
  scheduleType: Scalars['String']['input'];
};

export type AutomationTriggerActionInput = {
  actionType: Scalars['String']['input'];
  condition?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  kind: AutomationActionKindEnum;
  kindId?: InputMaybe<Scalars['ID']['input']>;
  parameters: AutomationTriggerActionParameterInput;
  status: AutomationActionStatusEnum;
};

export type AutomationTriggerActionParameterInput = {
  slackOauth2?: InputMaybe<SlackOauth2ParameterInput>;
  webhook?: InputMaybe<WebhookParameterInput>;
};

export enum AutomationTriggerEventTypeEnum {
  FileCreated = 'FILE_CREATED'
}

export enum AutomationTriggerSourceEnum {
  File = 'FILE'
}

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type CollectionAddFilesInput = {
  attachmentIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CollectionAttachment = {
  __typename?: 'CollectionAttachment';
  attachmentId: Scalars['ID']['output'];
  createdAt: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for CollectionAttachment. */
export type CollectionAttachmentConnection = {
  __typename?: 'CollectionAttachmentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CollectionAttachmentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CollectionAttachment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollectionAttachmentEdge = {
  __typename?: 'CollectionAttachmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<CollectionAttachment>;
};

/** The connection type for Collection. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CollectionEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Collection>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CollectionDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Collection>;
};

export type CollectionRemoveFilesInput = {
  attachmentIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CollectionUpdateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String']['output'];
  children: Array<Comment>;
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  updatedAt: Scalars['BigInt']['output'];
  user: CommentUser;
};

export enum CommentCommentableTypeEnum {
  Attachment = 'ATTACHMENT'
}

/** The connection type for Comment. */
export type CommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  body: Scalars['String']['input'];
  commentableId: Scalars['ID']['input'];
  commentableType: CommentCommentableTypeEnum;
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Comment>;
};

export type CommentUpdateInput = {
  body: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CommentUser = {
  __typename?: 'CommentUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export enum ConflictBehaviorEnum {
  Fail = 'FAIL',
  KeepBoth = 'KEEP_BOTH'
}

export enum ConflictCodeEnum {
  FileExists = 'FILE_EXISTS',
  FolderExists = 'FOLDER_EXISTS',
  PropagationError = 'PROPAGATION_ERROR'
}

export type Credential = {
  __typename?: 'Credential';
  archivedAt?: Maybe<Scalars['BigInt']['output']>;
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  provider: CredentialAuthLinkProviderEnum;
  updatedAt: Scalars['BigInt']['output'];
};

export type CredentialArchiveToggleInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type CredentialAuthLink = {
  __typename?: 'CredentialAuthLink';
  link: Scalars['String']['output'];
};

export enum CredentialAuthLinkProviderEnum {
  SlackOauth2 = 'SLACK_OAUTH2'
}

export type CredentialDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type DirectUploadAbortInput = {
  key: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  s3UploadId: Scalars['String']['input'];
  uploadJobId: Scalars['String']['input'];
};

export type DirectUploadComplete = {
  __typename?: 'DirectUploadComplete';
  location: Scalars['String']['output'];
};

export type DirectUploadCompleteInput = {
  key: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  parts: Array<DirectUploadCompletedPartsInput>;
  s3UploadId: Scalars['String']['input'];
  uploadJobId: Scalars['String']['input'];
};

export type DirectUploadCompletedPartsInput = {
  etag: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
};

export type DirectUploadInitiateInput = {
  attachmentIdToVersion?: InputMaybe<Scalars['ID']['input']>;
  byteSize: Scalars['BigInt']['input'];
  checksum: Scalars['String']['input'];
  contentType: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isMultipart: Scalars['Boolean']['input'];
  organizationId: Scalars['ID']['input'];
  relativePath?: InputMaybe<Scalars['String']['input']>;
  uploadJobId: Scalars['ID']['input'];
};

export type DirectUploadInitiateTypeUnion = DirectUploadMultipartUpload | DirectUploadSingleUpload;

export type DirectUploadListParts = {
  __typename?: 'DirectUploadListParts';
  etag: Scalars['String']['output'];
  partNumber: Scalars['Int']['output'];
  size: Scalars['BigInt']['output'];
};

export type DirectUploadMultipartUpload = {
  __typename?: 'DirectUploadMultipartUpload';
  attachmentId: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  s3UploadId: Scalars['String']['output'];
};

export type DirectUploadPrepareUploadPart = {
  __typename?: 'DirectUploadPrepareUploadPart';
  url: Scalars['String']['output'];
};

export type DirectUploadS3Initiate = {
  __typename?: 'DirectUploadS3Initiate';
  uploadDetails: DirectUploadInitiateTypeUnion;
};

export type DirectUploadSingleUpload = {
  __typename?: 'DirectUploadSingleUpload';
  attachmentId: Scalars['ID']['output'];
  fields?: Maybe<Scalars['JSON']['output']>;
  headers: Scalars['String']['output'];
  s3Method: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type DownloadLink = {
  __typename?: 'DownloadLink';
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items: Array<DownloadLinkItem>;
  link: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type DownloadLinkAttachment = {
  __typename?: 'DownloadLinkAttachment';
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

/** The connection type for DownloadLink. */
export type DownloadLinkConnection = {
  __typename?: 'DownloadLinkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DownloadLinkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DownloadLink>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DownloadLinkCreateInput = {
  expirationDate: Scalars['BigInt']['input'];
  fileName: Scalars['String']['input'];
  items: Array<DownloadLinkItemInput>;
  masterAttachmentId?: InputMaybe<Scalars['ID']['input']>;
  organizationId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DownloadLinkDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type DownloadLinkEdge = {
  __typename?: 'DownloadLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DownloadLink>;
};

export type DownloadLinkFolder = {
  __typename?: 'DownloadLinkFolder';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type DownloadLinkItem = {
  __typename?: 'DownloadLinkItem';
  createdAt: Scalars['BigInt']['output'];
  entity: DownloadLinkItemTypeUnion;
  id: Scalars['ID']['output'];
};

export type DownloadLinkItemInput = {
  downloadableId: Scalars['ID']['input'];
  downloadableType: DownloadableEnum;
};

export type DownloadLinkItemTypeUnion = DownloadLinkAttachment | DownloadLinkFolder;

export type DownloadLinkRevokeInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export enum DownloadableEnum {
  Attachment = 'ATTACHMENT',
  Folder = 'FOLDER'
}

export type DriveImportInput = {
  code: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  redirectUri: Scalars['String']['input'];
};

export type EntityActivityLog = ActivityLogInterface & {
  __typename?: 'EntityActivityLog';
  action: ActionEnum;
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  user?: Maybe<ActivityLogUser>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

/** The connection type for EntityActivityLog. */
export type EntityActivityLogConnection = {
  __typename?: 'EntityActivityLogConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EntityActivityLogEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<EntityActivityLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EntityActivityLogEdge = {
  __typename?: 'EntityActivityLogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<EntityActivityLog>;
};

export enum EntityEnum {
  Attachment = 'ATTACHMENT',
  AutomationRule = 'AUTOMATION_RULE',
  Collection = 'COLLECTION',
  Comment = 'COMMENT',
  Credential = 'CREDENTIAL',
  DownloadLink = 'DOWNLOAD_LINK',
  Folder = 'FOLDER',
  Organization = 'ORGANIZATION',
  OrganizationMember = 'ORGANIZATION_MEMBER',
  ShareableLink = 'SHAREABLE_LINK',
  Team = 'TEAM'
}

export type EntityUnion = ActivityLogAttachment | ActivityLogCollection | ActivityLogFolder | ActivityLogOrganization | ActivityLogTeam | ActivityLogTeamMember | ActivityLogUser;

export enum FavorableTypeEnum {
  Attachment = 'ATTACHMENT',
  Collection = 'COLLECTION',
  Folder = 'FOLDER'
}

export type FavorableUnion = UserFavoriteAttachment | UserFavoriteCollection | UserFavoriteFolder;

export enum FileConflictBehaviorEnum {
  Fail = 'FAIL',
  Proceed = 'PROCEED'
}

export type FileEmptyTrashInput = {
  organizationId: Scalars['ID']['input'];
};

export enum FileFailureReasonEnum {
  Authorization = 'AUTHORIZATION',
  RelatedObject = 'RELATED_OBJECT'
}

export enum FileFileTypeEnum {
  Attachment = 'ATTACHMENT',
  Folder = 'FOLDER'
}

export type FileInput = {
  id: Scalars['ID']['input'];
  type: FileFileTypeEnum;
};

export type FileMoveToTrash = {
  __typename?: 'FileMoveToTrash';
  error?: Maybe<Scalars['String']['output']>;
  failureReason?: Maybe<FileFailureReasonEnum>;
  id: Scalars['ID']['output'];
  relatedObjectCounts?: Maybe<Array<FileRelatedObjectCounts>>;
  success: Scalars['Boolean']['output'];
};

export type FileMoveToTrashInput = {
  conflictBehavior: FileConflictBehaviorEnum;
  files: Array<FileInput>;
  organizationId: Scalars['ID']['input'];
};

export type FileRelatedObjectCounts = {
  __typename?: 'FileRelatedObjectCounts';
  count: Scalars['Int']['output'];
  objectType: RelatedObjectEnum;
};

export type FileRestoreFromTrash = {
  __typename?: 'FileRestoreFromTrash';
  error?: Maybe<Scalars['String']['output']>;
  failureReason?: Maybe<FileFailureReasonEnum>;
  id: Scalars['ID']['output'];
  success: Scalars['Boolean']['output'];
};

export type FileRestoreFromTrashInput = {
  files: Array<FileInput>;
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  useOriginalLocation?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FileTypeEnum {
  Directory = 'DIRECTORY',
  File = 'FILE'
}

export type Folder = FolderInterface & {
  __typename?: 'Folder';
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  hasChildren: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['BigInt']['output'];
};

/** The connection type for Folder. */
export type FolderConnection = {
  __typename?: 'FolderConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FolderEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Folder>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FolderCreateInput = {
  conflictBehavior: ConflictBehaviorEnum;
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type FolderCreateOrMove = {
  __typename?: 'FolderCreateOrMove';
  error?: Maybe<FolderCreateOrMoveError>;
  folder?: Maybe<Folder>;
};

export type FolderCreateOrMoveError = {
  __typename?: 'FolderCreateOrMoveError';
  code: ConflictCodeEnum;
  intersectedFiles: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** An edge in a connection. */
export type FolderEdge = {
  __typename?: 'FolderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Folder>;
};

export type FolderInterface = {
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  hasChildren: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['BigInt']['output'];
};

export type FolderMoveInput = {
  conflictBehavior: MoveConflictBehaviorEnum;
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

export type FolderRawList = {
  __typename?: 'FolderRawList';
  folders: Scalars['JSON']['output'];
  size: Scalars['Int']['output'];
};

export type FolderRenameInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
};

export type FolderShow = FolderInterface & {
  __typename?: 'FolderShow';
  activityLogs?: Maybe<EntityActivityLogConnection>;
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  hasChildren: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['BigInt']['output'];
};


export type FolderShowActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type IntegrationSlackChannel = {
  __typename?: 'IntegrationSlackChannel';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Invitation = {
  __typename?: 'Invitation';
  createdAt: Scalars['BigInt']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type InvitationAccept = {
  __typename?: 'InvitationAccept';
  id: Scalars['ID']['output'];
  organization: InvitationAcceptOrganization;
};

export type InvitationAcceptInput = {
  token: Scalars['String']['input'];
};

export type InvitationAcceptOrganization = {
  __typename?: 'InvitationAcceptOrganization';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

/** The connection type for Invitation. */
export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InvitationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Invitation>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type InvitationEdge = {
  __typename?: 'InvitationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Invitation>;
};

export type Me = {
  __typename?: 'Me';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['BigInt']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  organizations: Array<Organization>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type MeProfilePictureCropInput = {
  height: Scalars['Int']['input'];
  left: Scalars['Int']['input'];
  top: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type MeUpdateInput = {
  avatar?: InputMaybe<Scalars['Upload']['input']>;
  cropDetails?: InputMaybe<MeProfilePictureCropInput>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
};

export enum MetadataValueTypeEnum {
  Boolean = 'BOOLEAN',
  Datetime = 'DATETIME',
  Float = 'FLOAT',
  Int = 'INT',
  Rational = 'RATIONAL',
  String = 'STRING'
}

export enum MoveConflictBehaviorEnum {
  Fail = 'FAIL',
  KeepBoth = 'KEEP_BOTH',
  OverwriteFile = 'OVERWRITE_FILE',
  RenameFile = 'RENAME_FILE'
}

export type Mutation = {
  __typename?: 'Mutation';
  attachmentTagCreate: Response;
  attachmentTagDelete: Response;
  attachmentVersionCheckout: Response;
  automationRuleCreate: AutomationRule;
  automationRuleDelete: Response;
  automationRuleUpdate: AutomationRule;
  collectionAddFiles: Response;
  collectionCreate: Collection;
  collectionDelete: Response;
  collectionRemoveFiles: Response;
  collectionUpdate: Collection;
  commentCreate: Comment;
  commentDelete: Response;
  commentUpdate: Comment;
  credentialArchiveToggle: Credential;
  credentialDelete: Response;
  directUploadAbort: Response;
  directUploadComplete: DirectUploadComplete;
  directUploadInitiate: DirectUploadS3Initiate;
  downloadLinkCreate: DownloadLink;
  downloadLinkDelete: Response;
  downloadLinkRevoke: Response;
  fileEmptyTrash: Response;
  fileMoveToTrash: Array<FileMoveToTrash>;
  fileRestoreFromTrash: Array<FileRestoreFromTrash>;
  folderCreate: FolderCreateOrMove;
  folderMove: FolderCreateOrMove;
  folderRename: FolderShow;
  importFromDrive: Response;
  importFromOneDrive: Response;
  invitationAccept: InvitationAccept;
  meUpdate: Me;
  notificationDelete: Response;
  notificationMarkAsRead: Response;
  organizationCreate: Organization;
  organizationMemberCreate: OrganizationMember;
  organizationMemberDelete: Response;
  organizationMemberUpdate: OrganizationMember;
  organizationUpdate: Organization;
  roleCreate: Role;
  roleDelete: Response;
  roleUpdate: Role;
  shareableLinkCreate: ShareableLink;
  shareableLinkDelete: Response;
  teamCreate: TeamShow;
  teamDelete: Response;
  teamMemberCreate: Response;
  teamMemberDelete: Response;
  teamUpdate: TeamShow;
  uploadJobStart: UploadJobStart;
  uploadJobUpdate: Response;
  userFavoriteCreate: Response;
  userFavoriteDelete: Response;
};


export type MutationAttachmentTagCreateArgs = {
  input: AttachmentTagCreate;
};


export type MutationAttachmentTagDeleteArgs = {
  input: AttachmentTagDelete;
};


export type MutationAttachmentVersionCheckoutArgs = {
  input: AttachmentVersionCheckout;
};


export type MutationAutomationRuleCreateArgs = {
  input: AutomationRuleCreateInput;
};


export type MutationAutomationRuleDeleteArgs = {
  input: AutomationRuleDeleteInput;
};


export type MutationAutomationRuleUpdateArgs = {
  input: AutomationRuleUpdateInput;
};


export type MutationCollectionAddFilesArgs = {
  input: CollectionAddFilesInput;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  input: CollectionDeleteInput;
};


export type MutationCollectionRemoveFilesArgs = {
  input: CollectionRemoveFilesInput;
};


export type MutationCollectionUpdateArgs = {
  input: CollectionUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  input: CommentDeleteInput;
};


export type MutationCommentUpdateArgs = {
  input: CommentUpdateInput;
};


export type MutationCredentialArchiveToggleArgs = {
  input: CredentialArchiveToggleInput;
};


export type MutationCredentialDeleteArgs = {
  input: CredentialDeleteInput;
};


export type MutationDirectUploadAbortArgs = {
  input: DirectUploadAbortInput;
};


export type MutationDirectUploadCompleteArgs = {
  input: DirectUploadCompleteInput;
};


export type MutationDirectUploadInitiateArgs = {
  input: DirectUploadInitiateInput;
};


export type MutationDownloadLinkCreateArgs = {
  input: DownloadLinkCreateInput;
};


export type MutationDownloadLinkDeleteArgs = {
  input: DownloadLinkDeleteInput;
};


export type MutationDownloadLinkRevokeArgs = {
  input: DownloadLinkRevokeInput;
};


export type MutationFileEmptyTrashArgs = {
  input: FileEmptyTrashInput;
};


export type MutationFileMoveToTrashArgs = {
  input: FileMoveToTrashInput;
};


export type MutationFileRestoreFromTrashArgs = {
  input: FileRestoreFromTrashInput;
};


export type MutationFolderCreateArgs = {
  input: FolderCreateInput;
};


export type MutationFolderMoveArgs = {
  input: FolderMoveInput;
};


export type MutationFolderRenameArgs = {
  input: FolderRenameInput;
};


export type MutationImportFromDriveArgs = {
  input: DriveImportInput;
};


export type MutationImportFromOneDriveArgs = {
  input: OneDriveImportInput;
};


export type MutationInvitationAcceptArgs = {
  input: InvitationAcceptInput;
};


export type MutationMeUpdateArgs = {
  input: MeUpdateInput;
};


export type MutationNotificationDeleteArgs = {
  input: NotificationDeleteInput;
};


export type MutationNotificationMarkAsReadArgs = {
  input: NotificationMarkAsReadInput;
};


export type MutationOrganizationCreateArgs = {
  input: OrganizationCreateInput;
};


export type MutationOrganizationMemberCreateArgs = {
  input: OrganizationMemberCreateInput;
};


export type MutationOrganizationMemberDeleteArgs = {
  input: OrganizationMemberDeleteInput;
};


export type MutationOrganizationMemberUpdateArgs = {
  input: OrganizationMemberUpdateInput;
};


export type MutationOrganizationUpdateArgs = {
  input: OrganizationUpdateInput;
};


export type MutationRoleCreateArgs = {
  input: RoleCreateInput;
};


export type MutationRoleDeleteArgs = {
  input: RoleDeleteInput;
};


export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
};


export type MutationShareableLinkCreateArgs = {
  input: ShareableLinkCreateInput;
};


export type MutationShareableLinkDeleteArgs = {
  input: ShareableLinkDeleteInput;
};


export type MutationTeamCreateArgs = {
  input: TeamCreateInput;
};


export type MutationTeamDeleteArgs = {
  input: TeamDeleteInput;
};


export type MutationTeamMemberCreateArgs = {
  input: TeamMemberCreateInput;
};


export type MutationTeamMemberDeleteArgs = {
  input: TeamMemberDeleteInput;
};


export type MutationTeamUpdateArgs = {
  input: TeamUpdateInput;
};


export type MutationUploadJobStartArgs = {
  input: UploadJobStartInput;
};


export type MutationUploadJobUpdateArgs = {
  input: UploadJobUpdateInput;
};


export type MutationUserFavoriteCreateArgs = {
  input: UserFavoriteCreateInput;
};


export type MutationUserFavoriteDeleteArgs = {
  input: UserFavoriteDeleteInput;
};

export type Notification = {
  __typename?: 'Notification';
  actor: NotificationUser;
  createdAt: Scalars['BigInt']['output'];
  eventType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  readAt?: Maybe<Scalars['BigInt']['output']>;
};

/** The connection type for Notification. */
export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NotificationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Notification>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NotificationDeleteInput = {
  /** To remove all notifications, pass an empty array. */
  ids: Array<Scalars['ID']['input']>;
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Notification>;
};

export type NotificationMarkAsReadInput = {
  /** To mark all notifications as read, pass an empty array. */
  ids: Array<Scalars['ID']['input']>;
  organizationId: Scalars['ID']['input'];
};

export type NotificationUser = {
  __typename?: 'NotificationUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type OneDriveConnect = {
  __typename?: 'OneDriveConnect';
  redirectUrl: Scalars['ID']['output'];
};

export type OneDriveImportInput = {
  code: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  redirectUri: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type OneSearch = {
  __typename?: 'OneSearch';
  hits: Array<OneSearchHit>;
  suggestions: Array<OneSearchSuggestion>;
};

export type OneSearchAutocomplete = {
  __typename?: 'OneSearchAutocomplete';
  hits: Array<OneSearchAutocompleteHit>;
};

export type OneSearchAutocompleteHit = {
  __typename?: 'OneSearchAutocompleteHit';
  name: Scalars['String']['output'];
};

export type OneSearchHit = {
  __typename?: 'OneSearchHit';
  fileType: SearchFileTypeEnum;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameHighlighted?: Maybe<Array<Scalars['String']['output']>>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type OneSearchSuggestion = {
  __typename?: 'OneSearchSuggestion';
  highlighted?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type Organization = OrganizationInterface & {
  __typename?: 'Organization';
  createdAt: Scalars['BigInt']['output'];
  dataSize: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type OrganizationCreateInput = {
  name: Scalars['String']['input'];
  sector?: InputMaybe<SectorEnum>;
  slug: Scalars['String']['input'];
};

export type OrganizationInterface = {
  createdAt: Scalars['BigInt']['output'];
  dataSize: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type OrganizationMember = {
  __typename?: 'OrganizationMember';
  id: Scalars['ID']['output'];
  invitationEmail: Scalars['String']['output'];
  invitedAt: Scalars['BigInt']['output'];
  invitedBy: OrganizationMemberUser;
  joinedAt?: Maybe<Scalars['BigInt']['output']>;
  roles?: Maybe<Array<OrganizationMemberRole>>;
  state: OrganizationMemberStateEnum;
  teams?: Maybe<Array<OrganizationMemberTeam>>;
  user?: Maybe<OrganizationMemberUser>;
};

export type OrganizationMemberCreateInput = {
  invitationEmail: Scalars['String']['input'];
  invitationMessage?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  teamIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type OrganizationMemberDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type OrganizationMemberRole = {
  __typename?: 'OrganizationMemberRole';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum OrganizationMemberStateEnum {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type OrganizationMemberTeam = {
  __typename?: 'OrganizationMemberTeam';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type OrganizationMemberUpdateInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  teamIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type OrganizationMemberUser = {
  __typename?: 'OrganizationMemberUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type OrganizationSector = {
  __typename?: 'OrganizationSector';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type OrganizationShow = OrganizationInterface & {
  __typename?: 'OrganizationShow';
  createdAt: Scalars['BigInt']['output'];
  dataSize: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type OrganizationStat = {
  __typename?: 'OrganizationStat';
  bytes: Scalars['BigInt']['output'];
  date: Scalars['String']['output'];
  sizeInHuman: Scalars['String']['output'];
  statSource?: Maybe<StatSourceEnum>;
};

export type OrganizationUpdateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Permission = {
  __typename?: 'Permission';
  entityId: Scalars['ID']['output'];
  entityType: EntityEnum;
  permissions: Array<PermissionType>;
};

export type PermissionEntitiesInput = {
  entityId: Scalars['ID']['input'];
  entityType: EntityEnum;
};

export enum PermissionEnum {
  AttachmentCommentCreate = 'ATTACHMENT_COMMENT_CREATE',
  AttachmentMoveToTrash = 'ATTACHMENT_MOVE_TO_TRASH',
  AttachmentRestoreFromTrash = 'ATTACHMENT_RESTORE_FROM_TRASH',
  AttachmentShare = 'ATTACHMENT_SHARE',
  AttachmentView = 'ATTACHMENT_VIEW',
  AutomationRuleDelete = 'AUTOMATION_RULE_DELETE',
  AutomationRuleUpdate = 'AUTOMATION_RULE_UPDATE',
  AutomationRuleView = 'AUTOMATION_RULE_VIEW',
  CollectionAddFile = 'COLLECTION_ADD_FILE',
  CollectionDelete = 'COLLECTION_DELETE',
  CollectionRemoveFile = 'COLLECTION_REMOVE_FILE',
  CollectionShare = 'COLLECTION_SHARE',
  CollectionUpdate = 'COLLECTION_UPDATE',
  CollectionView = 'COLLECTION_VIEW',
  CommentDelete = 'COMMENT_DELETE',
  CommentUpdate = 'COMMENT_UPDATE',
  CredentialDelete = 'CREDENTIAL_DELETE',
  CredentialUpdate = 'CREDENTIAL_UPDATE',
  CredentialView = 'CREDENTIAL_VIEW',
  DownloadLinkDelete = 'DOWNLOAD_LINK_DELETE',
  DownloadLinkUpdate = 'DOWNLOAD_LINK_UPDATE',
  DownloadLinkView = 'DOWNLOAD_LINK_VIEW',
  FolderMoveToTrash = 'FOLDER_MOVE_TO_TRASH',
  FolderRestoreFromTrash = 'FOLDER_RESTORE_FROM_TRASH',
  FolderShare = 'FOLDER_SHARE',
  FolderUpdate = 'FOLDER_UPDATE',
  FolderView = 'FOLDER_VIEW',
  OrganizationMemberDelete = 'ORGANIZATION_MEMBER_DELETE',
  OrganizationMemberUpdate = 'ORGANIZATION_MEMBER_UPDATE',
  OrganizationMemberView = 'ORGANIZATION_MEMBER_VIEW',
  OrgActivityLogList = 'ORG_ACTIVITY_LOG_LIST',
  OrgAdmin = 'ORG_ADMIN',
  OrgAutomationRuleCreate = 'ORG_AUTOMATION_RULE_CREATE',
  OrgCollectionCreate = 'ORG_COLLECTION_CREATE',
  OrgCredentialCreate = 'ORG_CREDENTIAL_CREATE',
  OrgDownloadLinkCreate = 'ORG_DOWNLOAD_LINK_CREATE',
  OrgEmptyTrash = 'ORG_EMPTY_TRASH',
  OrgFolderCreate = 'ORG_FOLDER_CREATE',
  OrgFolderList = 'ORG_FOLDER_LIST',
  OrgMember = 'ORG_MEMBER',
  OrgMemberCreate = 'ORG_MEMBER_CREATE',
  OrgMemberList = 'ORG_MEMBER_LIST',
  OrgRoleCreate = 'ORG_ROLE_CREATE',
  OrgRoleDelete = 'ORG_ROLE_DELETE',
  OrgRoleList = 'ORG_ROLE_LIST',
  OrgRoleUpdate = 'ORG_ROLE_UPDATE',
  OrgShareableLinkCreate = 'ORG_SHAREABLE_LINK_CREATE',
  OrgTagList = 'ORG_TAG_LIST',
  OrgTeamCreate = 'ORG_TEAM_CREATE',
  OrgTeamList = 'ORG_TEAM_LIST',
  OrgUpdate = 'ORG_UPDATE',
  OrgView = 'ORG_VIEW',
  ShareableLinkDelete = 'SHAREABLE_LINK_DELETE',
  ShareableLinkView = 'SHAREABLE_LINK_VIEW',
  TeamDelete = 'TEAM_DELETE',
  TeamMemberCreate = 'TEAM_MEMBER_CREATE',
  TeamMemberDelete = 'TEAM_MEMBER_DELETE',
  TeamMemberList = 'TEAM_MEMBER_LIST',
  TeamMemberUpdate = 'TEAM_MEMBER_UPDATE',
  TeamUpdate = 'TEAM_UPDATE',
  TeamView = 'TEAM_VIEW'
}

export type PermissionType = {
  __typename?: 'PermissionType';
  allowed: Scalars['Boolean']['output'];
  permission: PermissionEnum;
};

export type Placeholder = {
  __typename?: 'Placeholder';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  namespace: Scalars['String']['output'];
  returnType: PlaceholderParameterReturnTypeEnum;
};

export enum PlaceholderParameterReturnTypeEnum {
  Any = 'ANY',
  Bool = 'BOOL',
  Double = 'DOUBLE',
  Int = 'INT',
  List = 'LIST',
  Map = 'MAP',
  String = 'STRING'
}

export type Query = {
  __typename?: 'Query';
  activityLogsConnection: ActivityLogConnection;
  attachmentShow: AttachmentShow;
  attachmentVersionsConnection: AttachmentVersionConnection;
  attachmentsConnection: AttachmentConnection;
  automationRulesList: Array<AutomationRule>;
  beingUploadedFiles: Array<UploadJobFile>;
  collectionFilesConnection: CollectionAttachmentConnection;
  collectionsConnection: CollectionConnection;
  commentsConnection: CommentConnection;
  credentialAuthLink: CredentialAuthLink;
  credentialsList: Array<Credential>;
  directUploadListParts: Array<DirectUploadListParts>;
  directUploadPrepareUploadPart: DirectUploadPrepareUploadPart;
  downloadLinksConnection: DownloadLinkConnection;
  folderShow: FolderShow;
  foldersConnection: FolderConnection;
  foldersFullList: FolderRawList;
  integrationSlackChannelsList: Array<IntegrationSlackChannel>;
  invitationsConnection: InvitationConnection;
  me: Me;
  myActivityLogsConnection: ActivityLogConnection;
  notificationsConnection: NotificationConnection;
  oneDriveAuthorizeUrl: OneDriveConnect;
  oneSearchAutocompleteList: OneSearchAutocomplete;
  oneSearchList: OneSearch;
  organizationMemberShow: OrganizationMember;
  organizationMembersList: Array<OrganizationMember>;
  organizationSectorList: Array<OrganizationSector>;
  organizationShow: OrganizationShow;
  organizationStats: Array<OrganizationStat>;
  permissionLookup: Array<Permission>;
  placeholdersList: Array<Placeholder>;
  rolesList: Array<Role>;
  shareableLinksConnection: ShareableLinkConnection;
  tagsConnection: TagConnection;
  teamMembersConnection: TeamMemberConnection;
  teamShow: TeamShow;
  teamsList: Array<Team>;
  userFavoritesConnection: UserFavoriteConnection;
};


export type QueryActivityLogsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAttachmentShowArgs = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryAttachmentVersionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attachmentId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryAttachmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  sortBy?: InputMaybe<AttachmentSortByEnum>;
  sortType?: InputMaybe<SortTypeEnum>;
  term?: InputMaybe<Scalars['String']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAutomationRulesListArgs = {
  organizationId: Scalars['ID']['input'];
  status?: InputMaybe<AutomationRuleStatusEnum>;
};


export type QueryBeingUploadedFilesArgs = {
  organizationId: Scalars['ID']['input'];
  uploadJobIds: Array<Scalars['ID']['input']>;
};


export type QueryCollectionFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  commentableId: Scalars['ID']['input'];
  commentableType: CommentCommentableTypeEnum;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryCredentialAuthLinkArgs = {
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  provider: CredentialAuthLinkProviderEnum;
};


export type QueryCredentialsListArgs = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryDirectUploadListPartsArgs = {
  key: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  s3UploadId: Scalars['String']['input'];
};


export type QueryDirectUploadPrepareUploadPartArgs = {
  key: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  partNumber: Scalars['Int']['input'];
  s3UploadId: Scalars['String']['input'];
};


export type QueryDownloadLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryFolderShowArgs = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFoldersFullListArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryIntegrationSlackChannelsListArgs = {
  integrationId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryInvitationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type QueryMyActivityLogsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryOneDriveAuthorizeUrlArgs = {
  organizationId: Scalars['ID']['input'];
  redirectUri: Scalars['String']['input'];
};


export type QueryOneSearchAutocompleteListArgs = {
  organizationId: Scalars['ID']['input'];
  term: Scalars['String']['input'];
};


export type QueryOneSearchListArgs = {
  organizationId: Scalars['ID']['input'];
  term: Scalars['String']['input'];
};


export type QueryOrganizationMemberShowArgs = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryOrganizationMembersListArgs = {
  organizationId: Scalars['ID']['input'];
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationShowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrganizationStatsArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryPermissionLookupArgs = {
  entities: Array<PermissionEntitiesInput>;
  organizationId: Scalars['ID']['input'];
};


export type QueryPlaceholdersListArgs = {
  eventType: AutomationTriggerEventTypeEnum;
};


export type QueryRolesListArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryShareableLinksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};


export type QueryTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  term?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
};


export type QueryTeamShowArgs = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};


export type QueryTeamsListArgs = {
  organizationId: Scalars['ID']['input'];
};


export type QueryUserFavoritesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
};

export enum RelatedObjectEnum {
  Attachment = 'ATTACHMENT',
  Collection = 'COLLECTION',
  DownloadLink = 'DOWNLOAD_LINK',
  ShareableLink = 'SHAREABLE_LINK'
}

export type ResourcePermission = {
  __typename?: 'ResourcePermission';
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  group?: Maybe<RolePermissionGroupEnum>;
  id: Scalars['ID']['output'];
  permission: PermissionEnum;
};

export type ResourceRole = {
  __typename?: 'ResourceRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  kind: RoleKindEnum;
  name: Scalars['String']['output'];
  permissions: Array<ResourcePermission>;
};

export enum ResourceTypeEnum {
  Attachment = 'ATTACHMENT',
  Collection = 'COLLECTION',
  Folder = 'FOLDER'
}

export type ResourceUnion = ShareableLinkAttachment | ShareableLinkCollection | ShareableLinkFolder;

export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  kind: RoleKindEnum;
  name: Scalars['String']['output'];
  permissions: Array<ResourcePermission>;
  updatedAt?: Maybe<Scalars['BigInt']['output']>;
};

export type RoleCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  permissions: Array<RolePermissionInput>;
};

export type RoleDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export enum RoleKindEnum {
  Custom = 'CUSTOM',
  System = 'SYSTEM'
}

export enum RolePermissionGroupEnum {
  Attachment = 'ATTACHMENT',
  Folder = 'FOLDER',
  Organization = 'ORGANIZATION',
  Team = 'TEAM'
}

export type RolePermissionInput = {
  permission: PermissionEnum;
};

export type RoleUpdateInput = {
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  permissions: Array<RolePermissionInput>;
};

export enum SearchFileTypeEnum {
  Collection = 'COLLECTION',
  Directory = 'DIRECTORY',
  DownloadLink = 'DOWNLOAD_LINK',
  File = 'FILE',
  ShareableLink = 'SHAREABLE_LINK',
  Team = 'TEAM',
  User = 'USER'
}

export enum SectorEnum {
  Agency = 'AGENCY',
  EducationNonprofit = 'EDUCATION_NONPROFIT',
  MarketingCreative = 'MARKETING_CREATIVE',
  MediaEntertainment = 'MEDIA_ENTERTAINMENT',
  Other = 'OTHER',
  RealEstateConstruction = 'REAL_ESTATE_CONSTRUCTION',
  RetailEcommerce = 'RETAIL_ECOMMERCE',
  TechSaas = 'TECH_SAAS'
}

export type ShareableLink = {
  __typename?: 'ShareableLink';
  createdAt: Scalars['BigInt']['output'];
  createdBy: AttachmentUser;
  expiresAt?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  resource: ResourceUnion;
  revokedAt?: Maybe<Scalars['BigInt']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type ShareableLinkAttachment = {
  __typename?: 'ShareableLinkAttachment';
  id: Scalars['ID']['output'];
};

export type ShareableLinkCollection = {
  __typename?: 'ShareableLinkCollection';
  id: Scalars['ID']['output'];
};

/** The connection type for ShareableLink. */
export type ShareableLinkConnection = {
  __typename?: 'ShareableLinkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ShareableLinkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<ShareableLink>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShareableLinkCreateInput = {
  expirationDate?: InputMaybe<Scalars['BigInt']['input']>;
  organizationId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  resourceId: Scalars['ID']['input'];
  resourceType: ResourceTypeEnum;
  title: Scalars['String']['input'];
};

export type ShareableLinkDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type ShareableLinkEdge = {
  __typename?: 'ShareableLinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<ShareableLink>;
};

export type ShareableLinkFolder = {
  __typename?: 'ShareableLinkFolder';
  id: Scalars['ID']['output'];
};

export type SlackOauth2ParameterInput = {
  channelId: Scalars['String']['input'];
  channelName: Scalars['String']['input'];
  messageTemplate?: InputMaybe<Scalars['String']['input']>;
};

export enum SortTypeEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StatSourceEnum {
  Data = 'DATA',
  Download = 'DOWNLOAD'
}

export enum StateEnum {
  Aborted = 'ABORTED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Mismatch = 'MISMATCH',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  UploadCompleted = 'UPLOAD_COMPLETED',
  UploadInProgress = 'UPLOAD_IN_PROGRESS'
}

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for Tag. */
export type TagConnection = {
  __typename?: 'TagConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TagEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TagEdge = {
  __typename?: 'TagEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Tag>;
};

export type Team = TeamInterface & {
  __typename?: 'Team';
  createdAt: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  teamMembers: Array<TeamMember>;
  updatedAt: Scalars['BigInt']['output'];
};

export type TeamCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type TeamDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type TeamInterface = {
  createdAt: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  teamMembers: Array<TeamMember>;
  updatedAt: Scalars['BigInt']['output'];
};

export type TeamMember = {
  __typename?: 'TeamMember';
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['BigInt']['output'];
  user: TeamMemberUser;
};

/** The connection type for TeamMember. */
export type TeamMemberConnection = {
  __typename?: 'TeamMemberConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<TeamMember>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TeamMemberCreateInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
  userIds: Array<Scalars['ID']['input']>;
};

export type TeamMemberDeleteInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type TeamMemberEdge = {
  __typename?: 'TeamMemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<TeamMember>;
};

export type TeamMemberUser = {
  __typename?: 'TeamMemberUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type TeamShow = TeamInterface & {
  __typename?: 'TeamShow';
  activityLogs?: Maybe<EntityActivityLogConnection>;
  createdAt: Scalars['BigInt']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roles?: Maybe<Array<ResourceRole>>;
  teamMembers: Array<TeamMember>;
  updatedAt: Scalars['BigInt']['output'];
};


export type TeamShowActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TeamUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UploadJobFile = {
  __typename?: 'UploadJobFile';
  attachmentId: Scalars['ID']['output'];
  bytes: Scalars['BigInt']['output'];
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  state: StateEnum;
};

export type UploadJobStart = {
  __typename?: 'UploadJobStart';
  id: Scalars['ID']['output'];
  isConflict: Scalars['Boolean']['output'];
  paths: Array<Scalars['String']['output']>;
};

export type UploadJobStartInput = {
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  paths: Array<Scalars['String']['input']>;
};

export type UploadJobUpdateInput = {
  id: Scalars['ID']['input'];
  keepDir: Scalars['Boolean']['input'];
  organizationId: Scalars['ID']['input'];
};

export type UserFavorite = {
  __typename?: 'UserFavorite';
  createdAt: Scalars['BigInt']['output'];
  favorable: FavorableUnion;
  id: Scalars['ID']['output'];
};

export type UserFavoriteAttachment = {
  __typename?: 'UserFavoriteAttachment';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type UserFavoriteCollection = {
  __typename?: 'UserFavoriteCollection';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The connection type for UserFavorite. */
export type UserFavoriteConnection = {
  __typename?: 'UserFavoriteConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserFavoriteEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<UserFavorite>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserFavoriteCreateInput = {
  favorites: Array<UserFavoriteFavorableInput>;
  organizationId: Scalars['ID']['input'];
};

export type UserFavoriteDeleteInput = {
  ids: Array<Scalars['ID']['input']>;
  organizationId: Scalars['ID']['input'];
};

/** An edge in a connection. */
export type UserFavoriteEdge = {
  __typename?: 'UserFavoriteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<UserFavorite>;
};

export type UserFavoriteFavorableInput = {
  favorableId: Scalars['ID']['input'];
  favorableType: FavorableTypeEnum;
};

export type UserFavoriteFolder = {
  __typename?: 'UserFavoriteFolder';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WebhookParameterInput = {
  url: Scalars['String']['input'];
};

export type AttachmentTagCreateMutationVariables = Exact<{
  input: AttachmentTagCreate;
}>;


export type AttachmentTagCreateMutation = { __typename?: 'Mutation', attachmentTagCreate: { __typename?: 'Response', message?: string | null, success: boolean } };

export type AttachmentTagDeleteMutationVariables = Exact<{
  input: AttachmentTagDelete;
}>;


export type AttachmentTagDeleteMutation = { __typename?: 'Mutation', attachmentTagDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type AttachmentVersionCheckoutMutationVariables = Exact<{
  input: AttachmentVersionCheckout;
}>;


export type AttachmentVersionCheckoutMutation = { __typename?: 'Mutation', attachmentVersionCheckout: { __typename?: 'Response', message?: string | null, success: boolean } };

export type AutomationRuleCreateMutationVariables = Exact<{
  input: AutomationRuleCreateInput;
}>;


export type AutomationRuleCreateMutation = { __typename?: 'Mutation', automationRuleCreate: { __typename?: 'AutomationRule', createdAt: bigint|number, description?: string | null, id: string, name?: string | null, status: AutomationRuleStatusEnum, updatedAt: bigint|number, actions: Array<{ __typename?: 'AutomationRuleAction', actionType: string, condition?: string | null, id: string, kind: AutomationActionKindEnum, kindId?: string | null, status: AutomationActionStatusEnum, parameters?:
        | { __typename: 'AutomationRuleActionSlackOauth2Parameter', channelId: string, channelName: string, messageTemplate?: string | null }
        | { __typename: 'AutomationRuleActionWebhookParameter', url: string }
       | null }>, eventTrigger?: { __typename?: 'AutomationRuleEventTrigger', condition?: string | null, eventType: AutomationTriggerEventTypeEnum, source: AutomationTriggerSourceEnum } | null } };

export type AutomationRuleDeleteMutationVariables = Exact<{
  input: AutomationRuleDeleteInput;
}>;


export type AutomationRuleDeleteMutation = { __typename?: 'Mutation', automationRuleDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type AutomationRuleUpdateMutationVariables = Exact<{
  input: AutomationRuleUpdateInput;
}>;


export type AutomationRuleUpdateMutation = { __typename?: 'Mutation', automationRuleUpdate: { __typename?: 'AutomationRule', createdAt: bigint|number, description?: string | null, id: string, name?: string | null, status: AutomationRuleStatusEnum, updatedAt: bigint|number, actions: Array<{ __typename?: 'AutomationRuleAction', actionType: string, condition?: string | null, id: string, kind: AutomationActionKindEnum, kindId?: string | null, status: AutomationActionStatusEnum, parameters?:
        | { __typename: 'AutomationRuleActionSlackOauth2Parameter', channelId: string, channelName: string, messageTemplate?: string | null }
        | { __typename: 'AutomationRuleActionWebhookParameter', url: string }
       | null }>, eventTrigger?: { __typename?: 'AutomationRuleEventTrigger', condition?: string | null, eventType: AutomationTriggerEventTypeEnum, source: AutomationTriggerSourceEnum } | null } };

export type CollectionAddFilesMutationVariables = Exact<{
  input: CollectionAddFilesInput;
}>;


export type CollectionAddFilesMutation = { __typename?: 'Mutation', collectionAddFiles: { __typename?: 'Response', message?: string | null, success: boolean } };

export type CollectionCreateMutationVariables = Exact<{
  input: CollectionCreateInput;
}>;


export type CollectionCreateMutation = { __typename?: 'Mutation', collectionCreate: { __typename?: 'Collection', createdAt: bigint|number, id: string, name: string, updatedAt: bigint|number } };

export type CollectionDeleteMutationVariables = Exact<{
  input: CollectionDeleteInput;
}>;


export type CollectionDeleteMutation = { __typename?: 'Mutation', collectionDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type CollectionRemoveFilesMutationVariables = Exact<{
  input: CollectionRemoveFilesInput;
}>;


export type CollectionRemoveFilesMutation = { __typename?: 'Mutation', collectionRemoveFiles: { __typename?: 'Response', message?: string | null, success: boolean } };

export type CollectionUpdateMutationVariables = Exact<{
  input: CollectionUpdateInput;
}>;


export type CollectionUpdateMutation = { __typename?: 'Mutation', collectionUpdate: { __typename?: 'Collection', createdAt: bigint|number, id: string, name: string, updatedAt: bigint|number } };

export type CommentCreateMutationVariables = Exact<{
  input: CommentCreateInput;
}>;


export type CommentCreateMutation = { __typename?: 'Mutation', commentCreate: { __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } }> }>, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } };

export type CommentDeleteMutationVariables = Exact<{
  input: CommentDeleteInput;
}>;


export type CommentDeleteMutation = { __typename?: 'Mutation', commentDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type CommentUpdateMutationVariables = Exact<{
  input: CommentUpdateInput;
}>;


export type CommentUpdateMutation = { __typename?: 'Mutation', commentUpdate: { __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } }> }>, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } };

export type CredentialArchiveToggleMutationVariables = Exact<{
  input: CredentialArchiveToggleInput;
}>;


export type CredentialArchiveToggleMutation = { __typename?: 'Mutation', credentialArchiveToggle: { __typename?: 'Credential', archivedAt?: bigint|number | null, createdAt: bigint|number, id: string, name: string, provider: CredentialAuthLinkProviderEnum, updatedAt: bigint|number } };

export type CredentialDeleteMutationVariables = Exact<{
  input: CredentialDeleteInput;
}>;


export type CredentialDeleteMutation = { __typename?: 'Mutation', credentialDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type DirectUploadAbortMutationVariables = Exact<{
  input: DirectUploadAbortInput;
}>;


export type DirectUploadAbortMutation = { __typename?: 'Mutation', directUploadAbort: { __typename?: 'Response', message?: string | null, success: boolean } };

export type DirectUploadCompleteMutationVariables = Exact<{
  input: DirectUploadCompleteInput;
}>;


export type DirectUploadCompleteMutation = { __typename?: 'Mutation', directUploadComplete: { __typename?: 'DirectUploadComplete', location: string } };

export type DirectUploadInitiateMutationVariables = Exact<{
  input: DirectUploadInitiateInput;
}>;


export type DirectUploadInitiateMutation = { __typename?: 'Mutation', directUploadInitiate: { __typename?: 'DirectUploadS3Initiate', uploadDetails:
      | { __typename: 'DirectUploadMultipartUpload', attachmentId: string, key: string, s3UploadId: string }
      | { __typename: 'DirectUploadSingleUpload', attachmentId: string, fields?: any | null, headers: string, s3Method: string, url: string }
     } };

export type DownloadLinkCreateMutationVariables = Exact<{
  input: DownloadLinkCreateInput;
}>;


export type DownloadLinkCreateMutation = { __typename?: 'Mutation', downloadLinkCreate: { __typename?: 'DownloadLink', createdAt: bigint|number, fileName?: string | null, id: string, link: string, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, items: Array<{ __typename?: 'DownloadLinkItem', createdAt: bigint|number, id: string, entity:
        | { __typename: 'DownloadLinkAttachment', filename: string, id: string }
        | { __typename: 'DownloadLinkFolder', id: string, name: string }
       }> } };

export type DownloadLinkDeleteMutationVariables = Exact<{
  input: DownloadLinkDeleteInput;
}>;


export type DownloadLinkDeleteMutation = { __typename?: 'Mutation', downloadLinkDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type DownloadLinkRevokeMutationVariables = Exact<{
  input: DownloadLinkRevokeInput;
}>;


export type DownloadLinkRevokeMutation = { __typename?: 'Mutation', downloadLinkRevoke: { __typename?: 'Response', message?: string | null, success: boolean } };

export type FileEmptyTrashMutationVariables = Exact<{
  input: FileEmptyTrashInput;
}>;


export type FileEmptyTrashMutation = { __typename?: 'Mutation', fileEmptyTrash: { __typename?: 'Response', message?: string | null, success: boolean } };

export type FileMoveToTrashMutationVariables = Exact<{
  input: FileMoveToTrashInput;
}>;


export type FileMoveToTrashMutation = { __typename?: 'Mutation', fileMoveToTrash: Array<{ __typename?: 'FileMoveToTrash', error?: string | null, failureReason?: FileFailureReasonEnum | null, id: string, success: boolean, relatedObjectCounts?: Array<{ __typename?: 'FileRelatedObjectCounts', count: number, objectType: RelatedObjectEnum }> | null }> };

export type FileRestoreFromTrashMutationVariables = Exact<{
  input: FileRestoreFromTrashInput;
}>;


export type FileRestoreFromTrashMutation = { __typename?: 'Mutation', fileRestoreFromTrash: Array<{ __typename?: 'FileRestoreFromTrash', error?: string | null, failureReason?: FileFailureReasonEnum | null, id: string, success: boolean }> };

export type FolderCreateMutationVariables = Exact<{
  input: FolderCreateInput;
}>;


export type FolderCreateMutation = { __typename?: 'Mutation', folderCreate: { __typename?: 'FolderCreateOrMove', error?: { __typename?: 'FolderCreateOrMoveError', code: ConflictCodeEnum, intersectedFiles: Array<string>, message: string } | null, folder?: { __typename?: 'Folder', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null } };

export type FolderMoveMutationVariables = Exact<{
  input: FolderMoveInput;
}>;


export type FolderMoveMutation = { __typename?: 'Mutation', folderMove: { __typename?: 'FolderCreateOrMove', error?: { __typename?: 'FolderCreateOrMoveError', code: ConflictCodeEnum, intersectedFiles: Array<string>, message: string } | null, folder?: { __typename?: 'Folder', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null } };

export type FolderRenameMutationVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  input: FolderRenameInput;
}>;


export type FolderRenameMutation = { __typename?: 'Mutation', folderRename: { __typename?: 'FolderShow', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, activityLogs?: { __typename?: 'EntityActivityLogConnection', edges?: Array<{ __typename?: 'EntityActivityLogEdge', cursor: string, node?: { __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } };

export type ImportFromDriveMutationVariables = Exact<{
  input: DriveImportInput;
}>;


export type ImportFromDriveMutation = { __typename?: 'Mutation', importFromDrive: { __typename?: 'Response', message?: string | null, success: boolean } };

export type ImportFromOneDriveMutationVariables = Exact<{
  input: OneDriveImportInput;
}>;


export type ImportFromOneDriveMutation = { __typename?: 'Mutation', importFromOneDrive: { __typename?: 'Response', message?: string | null, success: boolean } };

export type InvitationAcceptMutationVariables = Exact<{
  input: InvitationAcceptInput;
}>;


export type InvitationAcceptMutation = { __typename?: 'Mutation', invitationAccept: { __typename?: 'InvitationAccept', id: string, organization: { __typename?: 'InvitationAcceptOrganization', id: string, name: string, slug: string } } };

export type MeUpdateMutationVariables = Exact<{
  input: MeUpdateInput;
}>;


export type MeUpdateMutation = { __typename?: 'Mutation', meUpdate: { __typename?: 'Me', avatarUrl?: string | null, createdAt: bigint|number, email: string, firstName?: string | null, id: string, lastName?: string | null, timezone: string, updatedAt: bigint|number, organizations: Array<{ __typename?: 'Organization', createdAt: bigint|number, dataSize: bigint|number, id: string, name: string, slug: string, updatedAt: bigint|number }> } };

export type NotificationDeleteMutationVariables = Exact<{
  input: NotificationDeleteInput;
}>;


export type NotificationDeleteMutation = { __typename?: 'Mutation', notificationDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type NotificationMarkAsReadMutationVariables = Exact<{
  input: NotificationMarkAsReadInput;
}>;


export type NotificationMarkAsReadMutation = { __typename?: 'Mutation', notificationMarkAsRead: { __typename?: 'Response', message?: string | null, success: boolean } };

export type OrganizationCreateMutationVariables = Exact<{
  input: OrganizationCreateInput;
}>;


export type OrganizationCreateMutation = { __typename?: 'Mutation', organizationCreate: { __typename?: 'Organization', createdAt: bigint|number, dataSize: bigint|number, id: string, name: string, slug: string, updatedAt: bigint|number } };

export type OrganizationMemberCreateMutationVariables = Exact<{
  input: OrganizationMemberCreateInput;
}>;


export type OrganizationMemberCreateMutation = { __typename?: 'Mutation', organizationMemberCreate: { __typename?: 'OrganizationMember', id: string, invitationEmail: string, invitedAt: bigint|number, joinedAt?: bigint|number | null, state: OrganizationMemberStateEnum, invitedBy: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null }, roles?: Array<{ __typename?: 'OrganizationMemberRole', id: string, name: string }> | null, teams?: Array<{ __typename?: 'OrganizationMemberTeam', id: string, name: string }> | null, user?: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } | null } };

export type OrganizationMemberDeleteMutationVariables = Exact<{
  input: OrganizationMemberDeleteInput;
}>;


export type OrganizationMemberDeleteMutation = { __typename?: 'Mutation', organizationMemberDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type OrganizationMemberUpdateMutationVariables = Exact<{
  input: OrganizationMemberUpdateInput;
}>;


export type OrganizationMemberUpdateMutation = { __typename?: 'Mutation', organizationMemberUpdate: { __typename?: 'OrganizationMember', id: string, invitationEmail: string, invitedAt: bigint|number, joinedAt?: bigint|number | null, state: OrganizationMemberStateEnum, invitedBy: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null }, roles?: Array<{ __typename?: 'OrganizationMemberRole', id: string, name: string }> | null, teams?: Array<{ __typename?: 'OrganizationMemberTeam', id: string, name: string }> | null, user?: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } | null } };

export type OrganizationUpdateMutationVariables = Exact<{
  input: OrganizationUpdateInput;
}>;


export type OrganizationUpdateMutation = { __typename?: 'Mutation', organizationUpdate: { __typename?: 'Organization', createdAt: bigint|number, dataSize: bigint|number, id: string, name: string, slug: string, updatedAt: bigint|number } };

export type RoleCreateMutationVariables = Exact<{
  input: RoleCreateInput;
}>;


export type RoleCreateMutation = { __typename?: 'Mutation', roleCreate: { __typename?: 'Role', createdAt?: bigint|number | null, description?: string | null, id: string, kind: RoleKindEnum, name: string, updatedAt?: bigint|number | null, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> } };

export type RoleDeleteMutationVariables = Exact<{
  input: RoleDeleteInput;
}>;


export type RoleDeleteMutation = { __typename?: 'Mutation', roleDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type RoleUpdateMutationVariables = Exact<{
  input: RoleUpdateInput;
}>;


export type RoleUpdateMutation = { __typename?: 'Mutation', roleUpdate: { __typename?: 'Role', createdAt?: bigint|number | null, description?: string | null, id: string, kind: RoleKindEnum, name: string, updatedAt?: bigint|number | null, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> } };

export type ShareableLinkCreateMutationVariables = Exact<{
  input: ShareableLinkCreateInput;
}>;


export type ShareableLinkCreateMutation = { __typename?: 'Mutation', shareableLinkCreate: { __typename?: 'ShareableLink', createdAt: bigint|number, expiresAt?: bigint|number | null, id: string, revokedAt?: bigint|number | null, title?: string | null, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, resource:
      | { __typename: 'ShareableLinkAttachment', id: string }
      | { __typename: 'ShareableLinkCollection', id: string }
      | { __typename: 'ShareableLinkFolder', id: string }
     } };

export type ShareableLinkDeleteMutationVariables = Exact<{
  input: ShareableLinkDeleteInput;
}>;


export type ShareableLinkDeleteMutation = { __typename?: 'Mutation', shareableLinkDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type TeamCreateMutationVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  input: TeamCreateInput;
}>;


export type TeamCreateMutation = { __typename?: 'Mutation', teamCreate: { __typename?: 'TeamShow', createdAt: bigint|number, description?: string | null, id: string, name: string, updatedAt: bigint|number, activityLogs?: { __typename?: 'EntityActivityLogConnection', edges?: Array<{ __typename?: 'EntityActivityLogEdge', cursor: string, node?: { __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, roles?: Array<{ __typename?: 'ResourceRole', description?: string | null, id: string, kind: RoleKindEnum, name: string, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> }> | null, teamMembers: Array<{ __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } }> } };

export type TeamDeleteMutationVariables = Exact<{
  input: TeamDeleteInput;
}>;


export type TeamDeleteMutation = { __typename?: 'Mutation', teamDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type TeamMemberCreateMutationVariables = Exact<{
  input: TeamMemberCreateInput;
}>;


export type TeamMemberCreateMutation = { __typename?: 'Mutation', teamMemberCreate: { __typename?: 'Response', message?: string | null, success: boolean } };

export type TeamMemberDeleteMutationVariables = Exact<{
  input: TeamMemberDeleteInput;
}>;


export type TeamMemberDeleteMutation = { __typename?: 'Mutation', teamMemberDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type TeamUpdateMutationVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  input: TeamUpdateInput;
}>;


export type TeamUpdateMutation = { __typename?: 'Mutation', teamUpdate: { __typename?: 'TeamShow', createdAt: bigint|number, description?: string | null, id: string, name: string, updatedAt: bigint|number, activityLogs?: { __typename?: 'EntityActivityLogConnection', edges?: Array<{ __typename?: 'EntityActivityLogEdge', cursor: string, node?: { __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, roles?: Array<{ __typename?: 'ResourceRole', description?: string | null, id: string, kind: RoleKindEnum, name: string, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> }> | null, teamMembers: Array<{ __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } }> } };

export type UploadJobStartMutationVariables = Exact<{
  input: UploadJobStartInput;
}>;


export type UploadJobStartMutation = { __typename?: 'Mutation', uploadJobStart: { __typename?: 'UploadJobStart', id: string, isConflict: boolean, paths: Array<string> } };

export type UploadJobUpdateMutationVariables = Exact<{
  input: UploadJobUpdateInput;
}>;


export type UploadJobUpdateMutation = { __typename?: 'Mutation', uploadJobUpdate: { __typename?: 'Response', message?: string | null, success: boolean } };

export type UserFavoriteCreateMutationVariables = Exact<{
  input: UserFavoriteCreateInput;
}>;


export type UserFavoriteCreateMutation = { __typename?: 'Mutation', userFavoriteCreate: { __typename?: 'Response', message?: string | null, success: boolean } };

export type UserFavoriteDeleteMutationVariables = Exact<{
  input: UserFavoriteDeleteInput;
}>;


export type UserFavoriteDeleteMutation = { __typename?: 'Mutation', userFavoriteDelete: { __typename?: 'Response', message?: string | null, success: boolean } };

export type ActivityLogsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ActivityLogsConnectionQuery = { __typename?: 'Query', activityLogsConnection: { __typename?: 'ActivityLogConnection', edges?: Array<{ __typename?: 'ActivityLogEdge', cursor: string, node?: { __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
          | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogCollection', id: string, name: string }
          | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
         | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
            | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
            | { __typename: 'ActivityLogCollection', id: string, name: string }
            | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
            | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
           | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
              | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
              | { __typename: 'ActivityLogCollection', id: string, name: string }
              | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
              | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
             | null }> }> } | null } | null> | null, nodes?: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
        | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
        | { __typename: 'ActivityLogCollection', id: string, name: string }
        | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
        | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
       | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
          | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogCollection', id: string, name: string }
          | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
         | null }> } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type AttachmentShowQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type AttachmentShowQuery = { __typename?: 'Query', attachmentShow: { __typename?: 'AttachmentShow', byteSize?: bigint|number | null, collectionsCount?: number | null, contentType?: string | null, createdAt: bigint|number, dimensions?: Array<number> | null, downloadUrl?: string | null, favoriteId?: string | null, id: string, isFavored: boolean, name: string, previewUrl?: string | null, thumbnailUrl?: string | null, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, meta?: { __typename?: 'AttachmentMeta', pageCount?: number | null, slideCount?: number | null } | null, metadata?: Array<{ __typename?: 'AttachmentMetadata', id: string, namespace: string, tagName: string, value: string, valueType: MetadataValueTypeEnum }> | null, stats: { __typename?: 'AttachmentStats', downloadCount: bigint|number, monthlyStats: Array<{ __typename?: 'AttachmentMonthlyStats', date: bigint|number, downloadCount: bigint|number }> }, tags?: Array<{ __typename?: 'AttachmentTag', aiConfidence?: number | null, id: string, isAi: boolean, name: string, instances?: Array<{ __typename?: 'AttachmentTagInstance', confidence: number, height: number, left: number, top: number, width: number }> | null }> | null, versions: Array<{ __typename?: 'AttachmentVersion', attachmentId: string, createdAt: bigint|number, isLive: boolean, name: string, version: number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } }> } };

export type AttachmentVersionsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  attachmentId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AttachmentVersionsConnectionQuery = { __typename?: 'Query', attachmentVersionsConnection: { __typename?: 'AttachmentVersionConnection', edges?: Array<{ __typename?: 'AttachmentVersionEdge', cursor: string, node?: { __typename?: 'AttachmentVersion', attachmentId: string, createdAt: bigint|number, isLive: boolean, name: string, version: number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null } | null> | null, nodes?: Array<{ __typename?: 'AttachmentVersion', attachmentId: string, createdAt: bigint|number, isLive: boolean, name: string, version: number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type AttachmentsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
  trashed?: InputMaybe<Scalars['Boolean']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<AttachmentSortByEnum>;
  sortType?: InputMaybe<SortTypeEnum>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AttachmentsConnectionQuery = { __typename?: 'Query', attachmentsConnection: { __typename?: 'AttachmentConnection', edges?: Array<{ __typename?: 'AttachmentEdge', cursor: string, node?: { __typename?: 'Attachment', byteSize?: bigint|number | null, collectionsCount?: number | null, contentType?: string | null, createdAt: bigint|number, downloadUrl?: string | null, favoriteId?: string | null, fileType: FileTypeEnum, hasChildren: boolean, id: string, isFavored: boolean, name: string, originalPath?: string | null, previewUrl?: string | null, thumbnailUrl?: string | null, updatedAt: bigint|number, versionsCount?: number | null, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, meta?: { __typename?: 'AttachmentMeta', pageCount?: number | null, slideCount?: number | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'Attachment', byteSize?: bigint|number | null, collectionsCount?: number | null, contentType?: string | null, createdAt: bigint|number, downloadUrl?: string | null, favoriteId?: string | null, fileType: FileTypeEnum, hasChildren: boolean, id: string, isFavored: boolean, name: string, originalPath?: string | null, previewUrl?: string | null, thumbnailUrl?: string | null, updatedAt: bigint|number, versionsCount?: number | null, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, meta?: { __typename?: 'AttachmentMeta', pageCount?: number | null, slideCount?: number | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type AutomationRulesListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  status?: InputMaybe<AutomationRuleStatusEnum>;
}>;


export type AutomationRulesListQuery = { __typename?: 'Query', automationRulesList: Array<{ __typename?: 'AutomationRule', createdAt: bigint|number, description?: string | null, id: string, name?: string | null, status: AutomationRuleStatusEnum, updatedAt: bigint|number, actions: Array<{ __typename?: 'AutomationRuleAction', actionType: string, condition?: string | null, id: string, kind: AutomationActionKindEnum, kindId?: string | null, status: AutomationActionStatusEnum, parameters?:
        | { __typename: 'AutomationRuleActionSlackOauth2Parameter', channelId: string, channelName: string, messageTemplate?: string | null }
        | { __typename: 'AutomationRuleActionWebhookParameter', url: string }
       | null }>, eventTrigger?: { __typename?: 'AutomationRuleEventTrigger', condition?: string | null, eventType: AutomationTriggerEventTypeEnum, source: AutomationTriggerSourceEnum } | null }> };

export type BeingUploadedFilesQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  uploadJobIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type BeingUploadedFilesQuery = { __typename?: 'Query', beingUploadedFiles: Array<{ __typename?: 'UploadJobFile', attachmentId: string, bytes: bigint|number, createdAt: bigint|number, id: string, name: string, state: StateEnum }> };

export type CollectionFilesConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionFilesConnectionQuery = { __typename?: 'Query', collectionFilesConnection: { __typename?: 'CollectionAttachmentConnection', edges?: Array<{ __typename?: 'CollectionAttachmentEdge', cursor: string, node?: { __typename?: 'CollectionAttachment', attachmentId: string, createdAt: bigint|number, name: string } | null } | null> | null, nodes?: Array<{ __typename?: 'CollectionAttachment', attachmentId: string, createdAt: bigint|number, name: string } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type CollectionsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CollectionsConnectionQuery = { __typename?: 'Query', collectionsConnection: { __typename?: 'CollectionConnection', edges?: Array<{ __typename?: 'CollectionEdge', cursor: string, node?: { __typename?: 'Collection', createdAt: bigint|number, id: string, name: string, updatedAt: bigint|number } | null } | null> | null, nodes?: Array<{ __typename?: 'Collection', createdAt: bigint|number, id: string, name: string, updatedAt: bigint|number } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type CommentsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  commentableId: Scalars['ID']['input'];
  commentableType: CommentCommentableTypeEnum;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CommentsConnectionQuery = { __typename?: 'Query', commentsConnection: { __typename?: 'CommentConnection', edges?: Array<{ __typename?: 'CommentEdge', cursor: string, node?: { __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } }> }>, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } | null } | null> | null, nodes?: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number, children: Array<{ __typename?: 'Comment', body: string, createdAt: bigint|number, id: string, isEdited: boolean, updatedAt: bigint|number }>, user: { __typename?: 'CommentUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type CredentialAuthLinkQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  provider: CredentialAuthLinkProviderEnum;
}>;


export type CredentialAuthLinkQuery = { __typename?: 'Query', credentialAuthLink: { __typename?: 'CredentialAuthLink', link: string } };

export type CredentialsListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  archived?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CredentialsListQuery = { __typename?: 'Query', credentialsList: Array<{ __typename?: 'Credential', archivedAt?: bigint|number | null, createdAt: bigint|number, id: string, name: string, provider: CredentialAuthLinkProviderEnum, updatedAt: bigint|number }> };

export type DirectUploadListPartsQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  s3UploadId: Scalars['String']['input'];
  key: Scalars['String']['input'];
}>;


export type DirectUploadListPartsQuery = { __typename?: 'Query', directUploadListParts: Array<{ __typename?: 'DirectUploadListParts', etag: string, partNumber: number, size: bigint|number }> };

export type DirectUploadPrepareUploadPartQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  s3UploadId: Scalars['String']['input'];
  key: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
}>;


export type DirectUploadPrepareUploadPartQuery = { __typename?: 'Query', directUploadPrepareUploadPart: { __typename?: 'DirectUploadPrepareUploadPart', url: string } };

export type DownloadLinksConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DownloadLinksConnectionQuery = { __typename?: 'Query', downloadLinksConnection: { __typename?: 'DownloadLinkConnection', edges?: Array<{ __typename?: 'DownloadLinkEdge', cursor: string, node?: { __typename?: 'DownloadLink', createdAt: bigint|number, fileName?: string | null, id: string, link: string, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, items: Array<{ __typename?: 'DownloadLinkItem', createdAt: bigint|number, id: string, entity:
            | { __typename: 'DownloadLinkAttachment', filename: string, id: string }
            | { __typename: 'DownloadLinkFolder', id: string, name: string }
           }> } | null } | null> | null, nodes?: Array<{ __typename?: 'DownloadLink', createdAt: bigint|number, fileName?: string | null, id: string, link: string, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, items: Array<{ __typename?: 'DownloadLinkItem', createdAt: bigint|number, id: string, entity:
          | { __typename: 'DownloadLinkAttachment', filename: string, id: string }
          | { __typename: 'DownloadLinkFolder', id: string, name: string }
         }> } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type FolderShowQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type FolderShowQuery = { __typename?: 'Query', folderShow: { __typename?: 'FolderShow', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, activityLogs?: { __typename?: 'EntityActivityLogConnection', edges?: Array<{ __typename?: 'EntityActivityLogEdge', cursor: string, node?: { __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } };

export type FoldersConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FoldersConnectionQuery = { __typename?: 'Query', foldersConnection: { __typename?: 'FolderConnection', edges?: Array<{ __typename?: 'FolderEdge', cursor: string, node?: { __typename?: 'Folder', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null } | null> | null, nodes?: Array<{ __typename?: 'Folder', createdAt: bigint|number, hasChildren: boolean, id: string, name: string, parentId?: string | null, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type FoldersFullListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type FoldersFullListQuery = { __typename?: 'Query', foldersFullList: { __typename?: 'FolderRawList', folders: any, size: number } };

export type IntegrationSlackChannelsListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  integrationId: Scalars['ID']['input'];
}>;


export type IntegrationSlackChannelsListQuery = { __typename?: 'Query', integrationSlackChannelsList: Array<{ __typename?: 'IntegrationSlackChannel', id: string, name: string }> };

export type InvitationsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type InvitationsConnectionQuery = { __typename?: 'Query', invitationsConnection: { __typename?: 'InvitationConnection', edges?: Array<{ __typename?: 'InvitationEdge', cursor: string, node?: { __typename?: 'Invitation', createdAt: bigint|number, email: string, id: string, message?: string | null } | null } | null> | null, nodes?: Array<{ __typename?: 'Invitation', createdAt: bigint|number, email: string, id: string, message?: string | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', avatarUrl?: string | null, createdAt: bigint|number, email: string, firstName?: string | null, id: string, lastName?: string | null, timezone: string, updatedAt: bigint|number, organizations: Array<{ __typename?: 'Organization', createdAt: bigint|number, dataSize: bigint|number, id: string, name: string, slug: string, updatedAt: bigint|number }> } };

export type MyActivityLogsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MyActivityLogsConnectionQuery = { __typename?: 'Query', myActivityLogsConnection: { __typename?: 'ActivityLogConnection', edges?: Array<{ __typename?: 'ActivityLogEdge', cursor: string, node?: { __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
          | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogCollection', id: string, name: string }
          | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
         | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
            | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
            | { __typename: 'ActivityLogCollection', id: string, name: string }
            | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
            | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
            | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
           | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
              | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
              | { __typename: 'ActivityLogCollection', id: string, name: string }
              | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
              | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
              | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
             | null }> }> } | null } | null> | null, nodes?: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
        | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
        | { __typename: 'ActivityLogCollection', id: string, name: string }
        | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
        | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
        | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
       | null, groupItems: Array<{ __typename?: 'ActivityLog', action: ActionEnum, createdAt: bigint|number, groupCount: number, id: string, ip?: string | null, userAgent?: string | null, entity?:
          | { __typename: 'ActivityLogAttachment', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogCollection', id: string, name: string }
          | { __typename: 'ActivityLogFolder', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogOrganization', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeam', id: string, isDeleted: boolean, name: string }
          | { __typename: 'ActivityLogTeamMember', id: string, isDeleted: boolean }
          | { __typename: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null }
         | null }> } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type NotificationsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type NotificationsConnectionQuery = { __typename?: 'Query', notificationsConnection: { __typename?: 'NotificationConnection', edges?: Array<{ __typename?: 'NotificationEdge', cursor: string, node?: { __typename?: 'Notification', createdAt: bigint|number, eventType: string, id: string, readAt?: bigint|number | null, actor: { __typename?: 'NotificationUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } | null } | null> | null, nodes?: Array<{ __typename?: 'Notification', createdAt: bigint|number, eventType: string, id: string, readAt?: bigint|number | null, actor: { __typename?: 'NotificationUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type OneDriveAuthorizeUrlQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  redirectUri: Scalars['String']['input'];
}>;


export type OneDriveAuthorizeUrlQuery = { __typename?: 'Query', oneDriveAuthorizeUrl: { __typename?: 'OneDriveConnect', redirectUrl: string } };

export type OneSearchAutocompleteListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  term: Scalars['String']['input'];
}>;


export type OneSearchAutocompleteListQuery = { __typename?: 'Query', oneSearchAutocompleteList: { __typename?: 'OneSearchAutocomplete', hits: Array<{ __typename?: 'OneSearchAutocompleteHit', name: string }> } };

export type OneSearchListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  term: Scalars['String']['input'];
}>;


export type OneSearchListQuery = { __typename?: 'Query', oneSearchList: { __typename?: 'OneSearch', hits: Array<{ __typename?: 'OneSearchHit', fileType: SearchFileTypeEnum, id: string, name: string, nameHighlighted?: Array<string> | null, thumbnailUrl?: string | null }>, suggestions: Array<{ __typename?: 'OneSearchSuggestion', highlighted?: string | null, text?: string | null }> } };

export type OrganizationMemberShowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
}>;


export type OrganizationMemberShowQuery = { __typename?: 'Query', organizationMemberShow: { __typename?: 'OrganizationMember', id: string, invitationEmail: string, invitedAt: bigint|number, joinedAt?: bigint|number | null, state: OrganizationMemberStateEnum, invitedBy: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null }, roles?: Array<{ __typename?: 'OrganizationMemberRole', id: string, name: string }> | null, teams?: Array<{ __typename?: 'OrganizationMemberTeam', id: string, name: string }> | null, user?: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } | null } };

export type OrganizationMembersListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  term?: InputMaybe<Scalars['String']['input']>;
}>;


export type OrganizationMembersListQuery = { __typename?: 'Query', organizationMembersList: Array<{ __typename?: 'OrganizationMember', id: string, invitationEmail: string, invitedAt: bigint|number, joinedAt?: bigint|number | null, state: OrganizationMemberStateEnum, invitedBy: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null }, roles?: Array<{ __typename?: 'OrganizationMemberRole', id: string, name: string }> | null, teams?: Array<{ __typename?: 'OrganizationMemberTeam', id: string, name: string }> | null, user?: { __typename?: 'OrganizationMemberUser', avatarUrl?: string | null, firstName?: string | null, id: string, lastName?: string | null } | null }> };

export type OrganizationSectorListQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationSectorListQuery = { __typename?: 'Query', organizationSectorList: Array<{ __typename?: 'OrganizationSector', id: string, name: string }> };

export type OrganizationShowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrganizationShowQuery = { __typename?: 'Query', organizationShow: { __typename?: 'OrganizationShow', createdAt: bigint|number, dataSize: bigint|number, id: string, name: string, slug: string, updatedAt: bigint|number } };

export type OrganizationStatsQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type OrganizationStatsQuery = { __typename?: 'Query', organizationStats: Array<{ __typename?: 'OrganizationStat', bytes: bigint|number, date: string, sizeInHuman: string, statSource?: StatSourceEnum | null }> };

export type PermissionLookupQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  entities: Array<PermissionEntitiesInput> | PermissionEntitiesInput;
}>;


export type PermissionLookupQuery = { __typename?: 'Query', permissionLookup: Array<{ __typename?: 'Permission', entityId: string, entityType: EntityEnum, permissions: Array<{ __typename?: 'PermissionType', allowed: boolean, permission: PermissionEnum }> }> };

export type PlaceholdersListQueryVariables = Exact<{
  eventType: AutomationTriggerEventTypeEnum;
}>;


export type PlaceholdersListQuery = { __typename?: 'Query', placeholdersList: Array<{ __typename?: 'Placeholder', description?: string | null, key: string, label: string, namespace: string, returnType: PlaceholderParameterReturnTypeEnum }> };

export type RolesListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type RolesListQuery = { __typename?: 'Query', rolesList: Array<{ __typename?: 'Role', createdAt?: bigint|number | null, description?: string | null, id: string, kind: RoleKindEnum, name: string, updatedAt?: bigint|number | null, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> }> };

export type ShareableLinksConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ShareableLinksConnectionQuery = { __typename?: 'Query', shareableLinksConnection: { __typename?: 'ShareableLinkConnection', edges?: Array<{ __typename?: 'ShareableLinkEdge', cursor: string, node?: { __typename?: 'ShareableLink', createdAt: bigint|number, expiresAt?: bigint|number | null, id: string, revokedAt?: bigint|number | null, title?: string | null, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, resource:
          | { __typename: 'ShareableLinkAttachment', id: string }
          | { __typename: 'ShareableLinkCollection', id: string }
          | { __typename: 'ShareableLinkFolder', id: string }
         } | null } | null> | null, nodes?: Array<{ __typename?: 'ShareableLink', createdAt: bigint|number, expiresAt?: bigint|number | null, id: string, revokedAt?: bigint|number | null, title?: string | null, token: string, updatedAt: bigint|number, createdBy: { __typename?: 'AttachmentUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null }, resource:
        | { __typename: 'ShareableLinkAttachment', id: string }
        | { __typename: 'ShareableLinkCollection', id: string }
        | { __typename: 'ShareableLinkFolder', id: string }
       } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type TagsConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  term?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TagsConnectionQuery = { __typename?: 'Query', tagsConnection: { __typename?: 'TagConnection', edges?: Array<{ __typename?: 'TagEdge', cursor: string, node?: { __typename?: 'Tag', createdAt: bigint|number, id: string, name: string } | null } | null> | null, nodes?: Array<{ __typename?: 'Tag', createdAt: bigint|number, id: string, name: string } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type TeamMembersConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  teamId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TeamMembersConnectionQuery = { __typename?: 'Query', teamMembersConnection: { __typename?: 'TeamMemberConnection', edges?: Array<{ __typename?: 'TeamMemberEdge', cursor: string, node?: { __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null } | null> | null, nodes?: Array<{ __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };

export type TeamShowQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
}>;


export type TeamShowQuery = { __typename?: 'Query', teamShow: { __typename?: 'TeamShow', createdAt: bigint|number, description?: string | null, id: string, name: string, updatedAt: bigint|number, activityLogs?: { __typename?: 'EntityActivityLogConnection', edges?: Array<{ __typename?: 'EntityActivityLogEdge', cursor: string, node?: { __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null } | null> | null, nodes?: Array<{ __typename?: 'EntityActivityLog', action: ActionEnum, createdAt: bigint|number, id: string, ip?: string | null, userAgent?: string | null, user?: { __typename?: 'ActivityLogUser', avatarUrl?: string | null, firstName?: string | null, id: string, isDeleted: boolean, lastName?: string | null } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, roles?: Array<{ __typename?: 'ResourceRole', description?: string | null, id: string, kind: RoleKindEnum, name: string, permissions: Array<{ __typename?: 'ResourcePermission', createdAt?: bigint|number | null, group?: RolePermissionGroupEnum | null, id: string, permission: PermissionEnum }> }> | null, teamMembers: Array<{ __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } }> } };

export type TeamsListQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
}>;


export type TeamsListQuery = { __typename?: 'Query', teamsList: Array<{ __typename?: 'Team', createdAt: bigint|number, description?: string | null, id: string, name: string, updatedAt: bigint|number, teamMembers: Array<{ __typename?: 'TeamMember', createdAt: bigint|number, id: string, updatedAt: bigint|number, user: { __typename?: 'TeamMemberUser', avatarUrl?: string | null, firstName?: string | null, lastName?: string | null } }> }> };

export type UserFavoritesConnectionQueryVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserFavoritesConnectionQuery = { __typename?: 'Query', userFavoritesConnection: { __typename?: 'UserFavoriteConnection', edges?: Array<{ __typename?: 'UserFavoriteEdge', cursor: string, node?: { __typename?: 'UserFavorite', createdAt: bigint|number, id: string, favorable:
          | { __typename: 'UserFavoriteAttachment', id: string, name: string, thumbnailUrl?: string | null }
          | { __typename: 'UserFavoriteCollection', id: string, name: string }
          | { __typename: 'UserFavoriteFolder', id: string, name: string }
         } | null } | null> | null, nodes?: Array<{ __typename?: 'UserFavorite', createdAt: bigint|number, id: string, favorable:
        | { __typename: 'UserFavoriteAttachment', id: string, name: string, thumbnailUrl?: string | null }
        | { __typename: 'UserFavoriteCollection', id: string, name: string }
        | { __typename: 'UserFavoriteFolder', id: string, name: string }
       } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } };


export const AttachmentTagCreateDocument = gql`
    mutation attachmentTagCreate($input: AttachmentTagCreate!) {
  attachmentTagCreate(input: $input) {
    message
    success
  }
}
    `;
export const AttachmentTagDeleteDocument = gql`
    mutation attachmentTagDelete($input: AttachmentTagDelete!) {
  attachmentTagDelete(input: $input) {
    message
    success
  }
}
    `;
export const AttachmentVersionCheckoutDocument = gql`
    mutation attachmentVersionCheckout($input: AttachmentVersionCheckout!) {
  attachmentVersionCheckout(input: $input) {
    message
    success
  }
}
    `;
export const AutomationRuleCreateDocument = gql`
    mutation automationRuleCreate($input: AutomationRuleCreateInput!) {
  automationRuleCreate(input: $input) {
    actions {
      actionType
      condition
      id
      kind
      kindId
      parameters {
        __typename
        ... on AutomationRuleActionSlackOauth2Parameter {
          channelId
          channelName
          messageTemplate
        }
        ... on AutomationRuleActionWebhookParameter {
          url
        }
      }
      status
    }
    createdAt
    description
    eventTrigger {
      condition
      eventType
      source
    }
    id
    name
    status
    updatedAt
  }
}
    `;
export const AutomationRuleDeleteDocument = gql`
    mutation automationRuleDelete($input: AutomationRuleDeleteInput!) {
  automationRuleDelete(input: $input) {
    message
    success
  }
}
    `;
export const AutomationRuleUpdateDocument = gql`
    mutation automationRuleUpdate($input: AutomationRuleUpdateInput!) {
  automationRuleUpdate(input: $input) {
    actions {
      actionType
      condition
      id
      kind
      kindId
      parameters {
        __typename
        ... on AutomationRuleActionSlackOauth2Parameter {
          channelId
          channelName
          messageTemplate
        }
        ... on AutomationRuleActionWebhookParameter {
          url
        }
      }
      status
    }
    createdAt
    description
    eventTrigger {
      condition
      eventType
      source
    }
    id
    name
    status
    updatedAt
  }
}
    `;
export const CollectionAddFilesDocument = gql`
    mutation collectionAddFiles($input: CollectionAddFilesInput!) {
  collectionAddFiles(input: $input) {
    message
    success
  }
}
    `;
export const CollectionCreateDocument = gql`
    mutation collectionCreate($input: CollectionCreateInput!) {
  collectionCreate(input: $input) {
    createdAt
    id
    name
    updatedAt
  }
}
    `;
export const CollectionDeleteDocument = gql`
    mutation collectionDelete($input: CollectionDeleteInput!) {
  collectionDelete(input: $input) {
    message
    success
  }
}
    `;
export const CollectionRemoveFilesDocument = gql`
    mutation collectionRemoveFiles($input: CollectionRemoveFilesInput!) {
  collectionRemoveFiles(input: $input) {
    message
    success
  }
}
    `;
export const CollectionUpdateDocument = gql`
    mutation collectionUpdate($input: CollectionUpdateInput!) {
  collectionUpdate(input: $input) {
    createdAt
    id
    name
    updatedAt
  }
}
    `;
export const CommentCreateDocument = gql`
    mutation commentCreate($input: CommentCreateInput!) {
  commentCreate(input: $input) {
    body
    children {
      body
      children {
        body
        createdAt
        id
        isEdited
        updatedAt
        user {
          avatarUrl
          firstName
          id
          lastName
        }
      }
      createdAt
      id
      isEdited
      updatedAt
    }
    createdAt
    id
    isEdited
    updatedAt
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const CommentDeleteDocument = gql`
    mutation commentDelete($input: CommentDeleteInput!) {
  commentDelete(input: $input) {
    message
    success
  }
}
    `;
export const CommentUpdateDocument = gql`
    mutation commentUpdate($input: CommentUpdateInput!) {
  commentUpdate(input: $input) {
    body
    children {
      body
      children {
        body
        createdAt
        id
        isEdited
        updatedAt
        user {
          avatarUrl
          firstName
          id
          lastName
        }
      }
      createdAt
      id
      isEdited
      updatedAt
    }
    createdAt
    id
    isEdited
    updatedAt
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const CredentialArchiveToggleDocument = gql`
    mutation credentialArchiveToggle($input: CredentialArchiveToggleInput!) {
  credentialArchiveToggle(input: $input) {
    archivedAt
    createdAt
    id
    name
    provider
    updatedAt
  }
}
    `;
export const CredentialDeleteDocument = gql`
    mutation credentialDelete($input: CredentialDeleteInput!) {
  credentialDelete(input: $input) {
    message
    success
  }
}
    `;
export const DirectUploadAbortDocument = gql`
    mutation directUploadAbort($input: DirectUploadAbortInput!) {
  directUploadAbort(input: $input) {
    message
    success
  }
}
    `;
export const DirectUploadCompleteDocument = gql`
    mutation directUploadComplete($input: DirectUploadCompleteInput!) {
  directUploadComplete(input: $input) {
    location
  }
}
    `;
export const DirectUploadInitiateDocument = gql`
    mutation directUploadInitiate($input: DirectUploadInitiateInput!) {
  directUploadInitiate(input: $input) {
    uploadDetails {
      __typename
      ... on DirectUploadMultipartUpload {
        attachmentId
        key
        s3UploadId
      }
      ... on DirectUploadSingleUpload {
        attachmentId
        fields
        headers
        s3Method
        url
      }
    }
  }
}
    `;
export const DownloadLinkCreateDocument = gql`
    mutation downloadLinkCreate($input: DownloadLinkCreateInput!) {
  downloadLinkCreate(input: $input) {
    createdAt
    createdBy {
      avatarUrl
      firstName
      lastName
    }
    fileName
    id
    items {
      createdAt
      entity {
        __typename
        ... on DownloadLinkAttachment {
          filename
          id
        }
        ... on DownloadLinkFolder {
          id
          name
        }
      }
      id
    }
    link
    token
    updatedAt
  }
}
    `;
export const DownloadLinkDeleteDocument = gql`
    mutation downloadLinkDelete($input: DownloadLinkDeleteInput!) {
  downloadLinkDelete(input: $input) {
    message
    success
  }
}
    `;
export const DownloadLinkRevokeDocument = gql`
    mutation downloadLinkRevoke($input: DownloadLinkRevokeInput!) {
  downloadLinkRevoke(input: $input) {
    message
    success
  }
}
    `;
export const FileEmptyTrashDocument = gql`
    mutation fileEmptyTrash($input: FileEmptyTrashInput!) {
  fileEmptyTrash(input: $input) {
    message
    success
  }
}
    `;
export const FileMoveToTrashDocument = gql`
    mutation fileMoveToTrash($input: FileMoveToTrashInput!) {
  fileMoveToTrash(input: $input) {
    error
    failureReason
    id
    relatedObjectCounts {
      count
      objectType
    }
    success
  }
}
    `;
export const FileRestoreFromTrashDocument = gql`
    mutation fileRestoreFromTrash($input: FileRestoreFromTrashInput!) {
  fileRestoreFromTrash(input: $input) {
    error
    failureReason
    id
    success
  }
}
    `;
export const FolderCreateDocument = gql`
    mutation folderCreate($input: FolderCreateInput!) {
  folderCreate(input: $input) {
    error {
      code
      intersectedFiles
      message
    }
    folder {
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      hasChildren
      id
      name
      parentId
      updatedAt
    }
  }
}
    `;
export const FolderMoveDocument = gql`
    mutation folderMove($input: FolderMoveInput!) {
  folderMove(input: $input) {
    error {
      code
      intersectedFiles
      message
    }
    folder {
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      hasChildren
      id
      name
      parentId
      updatedAt
    }
  }
}
    `;
export const FolderRenameDocument = gql`
    mutation folderRename($after: String, $before: String, $first: Int, $last: Int, $input: FolderRenameInput!) {
  folderRename(input: $input) {
    activityLogs(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          action
          createdAt
          id
          ip
          user {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
          userAgent
        }
      }
      nodes {
        action
        createdAt
        id
        ip
        user {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
        userAgent
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    createdAt
    createdBy {
      avatarUrl
      firstName
      lastName
    }
    hasChildren
    id
    name
    parentId
    updatedAt
  }
}
    `;
export const ImportFromDriveDocument = gql`
    mutation importFromDrive($input: DriveImportInput!) {
  importFromDrive(input: $input) {
    message
    success
  }
}
    `;
export const ImportFromOneDriveDocument = gql`
    mutation importFromOneDrive($input: OneDriveImportInput!) {
  importFromOneDrive(input: $input) {
    message
    success
  }
}
    `;
export const InvitationAcceptDocument = gql`
    mutation invitationAccept($input: InvitationAcceptInput!) {
  invitationAccept(input: $input) {
    id
    organization {
      id
      name
      slug
    }
  }
}
    `;
export const MeUpdateDocument = gql`
    mutation meUpdate($input: MeUpdateInput!) {
  meUpdate(input: $input) {
    avatarUrl
    createdAt
    email
    firstName
    id
    lastName
    organizations {
      createdAt
      dataSize
      id
      name
      slug
      updatedAt
    }
    timezone
    updatedAt
  }
}
    `;
export const NotificationDeleteDocument = gql`
    mutation notificationDelete($input: NotificationDeleteInput!) {
  notificationDelete(input: $input) {
    message
    success
  }
}
    `;
export const NotificationMarkAsReadDocument = gql`
    mutation notificationMarkAsRead($input: NotificationMarkAsReadInput!) {
  notificationMarkAsRead(input: $input) {
    message
    success
  }
}
    `;
export const OrganizationCreateDocument = gql`
    mutation organizationCreate($input: OrganizationCreateInput!) {
  organizationCreate(input: $input) {
    createdAt
    dataSize
    id
    name
    slug
    updatedAt
  }
}
    `;
export const OrganizationMemberCreateDocument = gql`
    mutation organizationMemberCreate($input: OrganizationMemberCreateInput!) {
  organizationMemberCreate(input: $input) {
    id
    invitationEmail
    invitedAt
    invitedBy {
      avatarUrl
      firstName
      id
      lastName
    }
    joinedAt
    roles {
      id
      name
    }
    state
    teams {
      id
      name
    }
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const OrganizationMemberDeleteDocument = gql`
    mutation organizationMemberDelete($input: OrganizationMemberDeleteInput!) {
  organizationMemberDelete(input: $input) {
    message
    success
  }
}
    `;
export const OrganizationMemberUpdateDocument = gql`
    mutation organizationMemberUpdate($input: OrganizationMemberUpdateInput!) {
  organizationMemberUpdate(input: $input) {
    id
    invitationEmail
    invitedAt
    invitedBy {
      avatarUrl
      firstName
      id
      lastName
    }
    joinedAt
    roles {
      id
      name
    }
    state
    teams {
      id
      name
    }
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const OrganizationUpdateDocument = gql`
    mutation organizationUpdate($input: OrganizationUpdateInput!) {
  organizationUpdate(input: $input) {
    createdAt
    dataSize
    id
    name
    slug
    updatedAt
  }
}
    `;
export const RoleCreateDocument = gql`
    mutation roleCreate($input: RoleCreateInput!) {
  roleCreate(input: $input) {
    createdAt
    description
    id
    kind
    name
    permissions {
      createdAt
      group
      id
      permission
    }
    updatedAt
  }
}
    `;
export const RoleDeleteDocument = gql`
    mutation roleDelete($input: RoleDeleteInput!) {
  roleDelete(input: $input) {
    message
    success
  }
}
    `;
export const RoleUpdateDocument = gql`
    mutation roleUpdate($input: RoleUpdateInput!) {
  roleUpdate(input: $input) {
    createdAt
    description
    id
    kind
    name
    permissions {
      createdAt
      group
      id
      permission
    }
    updatedAt
  }
}
    `;
export const ShareableLinkCreateDocument = gql`
    mutation shareableLinkCreate($input: ShareableLinkCreateInput!) {
  shareableLinkCreate(input: $input) {
    createdAt
    createdBy {
      avatarUrl
      firstName
      lastName
    }
    expiresAt
    id
    resource {
      __typename
      ... on ShareableLinkAttachment {
        id
      }
      ... on ShareableLinkCollection {
        id
      }
      ... on ShareableLinkFolder {
        id
      }
    }
    revokedAt
    title
    token
    updatedAt
  }
}
    `;
export const ShareableLinkDeleteDocument = gql`
    mutation shareableLinkDelete($input: ShareableLinkDeleteInput!) {
  shareableLinkDelete(input: $input) {
    message
    success
  }
}
    `;
export const TeamCreateDocument = gql`
    mutation teamCreate($after: String, $before: String, $first: Int, $last: Int, $input: TeamCreateInput!) {
  teamCreate(input: $input) {
    activityLogs(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          action
          createdAt
          id
          ip
          user {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
          userAgent
        }
      }
      nodes {
        action
        createdAt
        id
        ip
        user {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
        userAgent
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    createdAt
    description
    id
    name
    roles {
      description
      id
      kind
      name
      permissions {
        createdAt
        group
        id
        permission
      }
    }
    teamMembers {
      createdAt
      id
      updatedAt
      user {
        avatarUrl
        firstName
        lastName
      }
    }
    updatedAt
  }
}
    `;
export const TeamDeleteDocument = gql`
    mutation teamDelete($input: TeamDeleteInput!) {
  teamDelete(input: $input) {
    message
    success
  }
}
    `;
export const TeamMemberCreateDocument = gql`
    mutation teamMemberCreate($input: TeamMemberCreateInput!) {
  teamMemberCreate(input: $input) {
    message
    success
  }
}
    `;
export const TeamMemberDeleteDocument = gql`
    mutation teamMemberDelete($input: TeamMemberDeleteInput!) {
  teamMemberDelete(input: $input) {
    message
    success
  }
}
    `;
export const TeamUpdateDocument = gql`
    mutation teamUpdate($after: String, $before: String, $first: Int, $last: Int, $input: TeamUpdateInput!) {
  teamUpdate(input: $input) {
    activityLogs(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          action
          createdAt
          id
          ip
          user {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
          userAgent
        }
      }
      nodes {
        action
        createdAt
        id
        ip
        user {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
        userAgent
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    createdAt
    description
    id
    name
    roles {
      description
      id
      kind
      name
      permissions {
        createdAt
        group
        id
        permission
      }
    }
    teamMembers {
      createdAt
      id
      updatedAt
      user {
        avatarUrl
        firstName
        lastName
      }
    }
    updatedAt
  }
}
    `;
export const UploadJobStartDocument = gql`
    mutation uploadJobStart($input: UploadJobStartInput!) {
  uploadJobStart(input: $input) {
    id
    isConflict
    paths
  }
}
    `;
export const UploadJobUpdateDocument = gql`
    mutation uploadJobUpdate($input: UploadJobUpdateInput!) {
  uploadJobUpdate(input: $input) {
    message
    success
  }
}
    `;
export const UserFavoriteCreateDocument = gql`
    mutation userFavoriteCreate($input: UserFavoriteCreateInput!) {
  userFavoriteCreate(input: $input) {
    message
    success
  }
}
    `;
export const UserFavoriteDeleteDocument = gql`
    mutation userFavoriteDelete($input: UserFavoriteDeleteInput!) {
  userFavoriteDelete(input: $input) {
    message
    success
  }
}
    `;
export const ActivityLogsConnectionDocument = gql`
    query activityLogsConnection($organizationId: ID!, $userId: ID, $after: String, $before: String, $first: Int, $last: Int) {
  activityLogsConnection(
    organizationId: $organizationId
    userId: $userId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        action
        createdAt
        entity {
          __typename
          ... on ActivityLogAttachment {
            id
            isDeleted
          }
          ... on ActivityLogCollection {
            id
            name
          }
          ... on ActivityLogFolder {
            id
            isDeleted
            name
          }
          ... on ActivityLogOrganization {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeam {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeamMember {
            id
            isDeleted
          }
          ... on ActivityLogUser {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
        }
        groupCount
        groupItems {
          action
          createdAt
          entity {
            __typename
            ... on ActivityLogAttachment {
              id
              isDeleted
            }
            ... on ActivityLogCollection {
              id
              name
            }
            ... on ActivityLogFolder {
              id
              isDeleted
              name
            }
            ... on ActivityLogOrganization {
              id
              isDeleted
              name
            }
            ... on ActivityLogTeam {
              id
              isDeleted
              name
            }
            ... on ActivityLogTeamMember {
              id
              isDeleted
            }
            ... on ActivityLogUser {
              avatarUrl
              firstName
              id
              isDeleted
              lastName
            }
          }
          groupCount
          groupItems {
            action
            createdAt
            entity {
              __typename
              ... on ActivityLogAttachment {
                id
                isDeleted
              }
              ... on ActivityLogCollection {
                id
                name
              }
              ... on ActivityLogFolder {
                id
                isDeleted
                name
              }
              ... on ActivityLogOrganization {
                id
                isDeleted
                name
              }
              ... on ActivityLogTeam {
                id
                isDeleted
                name
              }
              ... on ActivityLogTeamMember {
                id
                isDeleted
              }
              ... on ActivityLogUser {
                avatarUrl
                firstName
                id
                isDeleted
                lastName
              }
            }
            groupCount
            id
            ip
            userAgent
          }
          id
          ip
          userAgent
        }
        id
        ip
        userAgent
      }
    }
    nodes {
      action
      createdAt
      entity {
        __typename
        ... on ActivityLogAttachment {
          id
          isDeleted
        }
        ... on ActivityLogCollection {
          id
          name
        }
        ... on ActivityLogFolder {
          id
          isDeleted
          name
        }
        ... on ActivityLogOrganization {
          id
          isDeleted
          name
        }
        ... on ActivityLogTeam {
          id
          isDeleted
          name
        }
        ... on ActivityLogTeamMember {
          id
          isDeleted
        }
        ... on ActivityLogUser {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
      }
      groupCount
      groupItems {
        action
        createdAt
        entity {
          __typename
          ... on ActivityLogAttachment {
            id
            isDeleted
          }
          ... on ActivityLogCollection {
            id
            name
          }
          ... on ActivityLogFolder {
            id
            isDeleted
            name
          }
          ... on ActivityLogOrganization {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeam {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeamMember {
            id
            isDeleted
          }
          ... on ActivityLogUser {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
        }
        groupCount
        id
        ip
        userAgent
      }
      id
      ip
      userAgent
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const AttachmentShowDocument = gql`
    query attachmentShow($organizationId: ID!, $id: ID!) {
  attachmentShow(organizationId: $organizationId, id: $id) {
    byteSize
    collectionsCount
    contentType
    createdAt
    createdBy {
      avatarUrl
      firstName
      lastName
    }
    dimensions
    downloadUrl
    favoriteId
    id
    isFavored
    meta {
      pageCount
      slideCount
    }
    metadata {
      id
      namespace
      tagName
      value
      valueType
    }
    name
    previewUrl
    stats {
      downloadCount
      monthlyStats {
        date
        downloadCount
      }
    }
    tags {
      aiConfidence
      id
      instances {
        confidence
        height
        left
        top
        width
      }
      isAi
      name
    }
    thumbnailUrl
    updatedAt
    versions {
      attachmentId
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      isLive
      name
      version
    }
  }
}
    `;
export const AttachmentVersionsConnectionDocument = gql`
    query attachmentVersionsConnection($organizationId: ID!, $attachmentId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  attachmentVersionsConnection(
    organizationId: $organizationId
    attachmentId: $attachmentId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        attachmentId
        createdAt
        createdBy {
          avatarUrl
          firstName
          lastName
        }
        isLive
        name
        version
      }
    }
    nodes {
      attachmentId
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      isLive
      name
      version
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const AttachmentsConnectionDocument = gql`
    query attachmentsConnection($organizationId: ID!, $folderId: ID, $trashed: Boolean, $term: String, $sortBy: AttachmentSortByEnum, $sortType: SortTypeEnum, $after: String, $before: String, $first: Int, $last: Int) {
  attachmentsConnection(
    organizationId: $organizationId
    folderId: $folderId
    trashed: $trashed
    term: $term
    sortBy: $sortBy
    sortType: $sortType
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        byteSize
        collectionsCount
        contentType
        createdAt
        createdBy {
          avatarUrl
          firstName
          lastName
        }
        downloadUrl
        favoriteId
        fileType
        hasChildren
        id
        isFavored
        meta {
          pageCount
          slideCount
        }
        name
        originalPath
        previewUrl
        thumbnailUrl
        updatedAt
        versionsCount
      }
    }
    nodes {
      byteSize
      collectionsCount
      contentType
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      downloadUrl
      favoriteId
      fileType
      hasChildren
      id
      isFavored
      meta {
        pageCount
        slideCount
      }
      name
      originalPath
      previewUrl
      thumbnailUrl
      updatedAt
      versionsCount
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const AutomationRulesListDocument = gql`
    query automationRulesList($organizationId: ID!, $status: AutomationRuleStatusEnum) {
  automationRulesList(organizationId: $organizationId, status: $status) {
    actions {
      actionType
      condition
      id
      kind
      kindId
      parameters {
        __typename
        ... on AutomationRuleActionSlackOauth2Parameter {
          channelId
          channelName
          messageTemplate
        }
        ... on AutomationRuleActionWebhookParameter {
          url
        }
      }
      status
    }
    createdAt
    description
    eventTrigger {
      condition
      eventType
      source
    }
    id
    name
    status
    updatedAt
  }
}
    `;
export const BeingUploadedFilesDocument = gql`
    query beingUploadedFiles($organizationId: ID!, $uploadJobIds: [ID!]!) {
  beingUploadedFiles(organizationId: $organizationId, uploadJobIds: $uploadJobIds) {
    attachmentId
    bytes
    createdAt
    id
    name
    state
  }
}
    `;
export const CollectionFilesConnectionDocument = gql`
    query collectionFilesConnection($organizationId: ID!, $id: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  collectionFilesConnection(
    organizationId: $organizationId
    id: $id
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        attachmentId
        createdAt
        name
      }
    }
    nodes {
      attachmentId
      createdAt
      name
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const CollectionsConnectionDocument = gql`
    query collectionsConnection($organizationId: ID!, $attachmentIds: [ID!], $after: String, $before: String, $first: Int, $last: Int) {
  collectionsConnection(
    organizationId: $organizationId
    attachmentIds: $attachmentIds
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        id
        name
        updatedAt
      }
    }
    nodes {
      createdAt
      id
      name
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const CommentsConnectionDocument = gql`
    query commentsConnection($organizationId: ID!, $commentableId: ID!, $commentableType: CommentCommentableTypeEnum!, $after: String, $before: String, $first: Int, $last: Int) {
  commentsConnection(
    organizationId: $organizationId
    commentableId: $commentableId
    commentableType: $commentableType
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        body
        children {
          body
          children {
            body
            createdAt
            id
            isEdited
            updatedAt
            user {
              avatarUrl
              firstName
              id
              lastName
            }
          }
          createdAt
          id
          isEdited
          updatedAt
        }
        createdAt
        id
        isEdited
        updatedAt
        user {
          avatarUrl
          firstName
          id
          lastName
        }
      }
    }
    nodes {
      body
      children {
        body
        createdAt
        id
        isEdited
        updatedAt
      }
      createdAt
      id
      isEdited
      updatedAt
      user {
        avatarUrl
        firstName
        id
        lastName
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const CredentialAuthLinkDocument = gql`
    query credentialAuthLink($organizationId: ID!, $name: String!, $provider: CredentialAuthLinkProviderEnum!) {
  credentialAuthLink(
    organizationId: $organizationId
    name: $name
    provider: $provider
  ) {
    link
  }
}
    `;
export const CredentialsListDocument = gql`
    query credentialsList($organizationId: ID!, $archived: Boolean) {
  credentialsList(organizationId: $organizationId, archived: $archived) {
    archivedAt
    createdAt
    id
    name
    provider
    updatedAt
  }
}
    `;
export const DirectUploadListPartsDocument = gql`
    query directUploadListParts($organizationId: ID!, $s3UploadId: String!, $key: String!) {
  directUploadListParts(
    organizationId: $organizationId
    s3UploadId: $s3UploadId
    key: $key
  ) {
    etag
    partNumber
    size
  }
}
    `;
export const DirectUploadPrepareUploadPartDocument = gql`
    query directUploadPrepareUploadPart($organizationId: ID!, $s3UploadId: String!, $key: String!, $partNumber: Int!) {
  directUploadPrepareUploadPart(
    organizationId: $organizationId
    s3UploadId: $s3UploadId
    key: $key
    partNumber: $partNumber
  ) {
    url
  }
}
    `;
export const DownloadLinksConnectionDocument = gql`
    query downloadLinksConnection($organizationId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  downloadLinksConnection(
    organizationId: $organizationId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        createdBy {
          avatarUrl
          firstName
          lastName
        }
        fileName
        id
        items {
          createdAt
          entity {
            __typename
            ... on DownloadLinkAttachment {
              filename
              id
            }
            ... on DownloadLinkFolder {
              id
              name
            }
          }
          id
        }
        link
        token
        updatedAt
      }
    }
    nodes {
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      fileName
      id
      items {
        createdAt
        entity {
          __typename
          ... on DownloadLinkAttachment {
            filename
            id
          }
          ... on DownloadLinkFolder {
            id
            name
          }
        }
        id
      }
      link
      token
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const FolderShowDocument = gql`
    query folderShow($after: String, $before: String, $first: Int, $last: Int, $organizationId: ID!, $id: ID!) {
  folderShow(organizationId: $organizationId, id: $id) {
    activityLogs(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          action
          createdAt
          id
          ip
          user {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
          userAgent
        }
      }
      nodes {
        action
        createdAt
        id
        ip
        user {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
        userAgent
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    createdAt
    createdBy {
      avatarUrl
      firstName
      lastName
    }
    hasChildren
    id
    name
    parentId
    updatedAt
  }
}
    `;
export const FoldersConnectionDocument = gql`
    query foldersConnection($organizationId: ID!, $parentId: ID, $after: String, $before: String, $first: Int, $last: Int) {
  foldersConnection(
    organizationId: $organizationId
    parentId: $parentId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        createdBy {
          avatarUrl
          firstName
          lastName
        }
        hasChildren
        id
        name
        parentId
        updatedAt
      }
    }
    nodes {
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      hasChildren
      id
      name
      parentId
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const FoldersFullListDocument = gql`
    query foldersFullList($organizationId: ID!) {
  foldersFullList(organizationId: $organizationId) {
    folders
    size
  }
}
    `;
export const IntegrationSlackChannelsListDocument = gql`
    query integrationSlackChannelsList($organizationId: ID!, $integrationId: ID!) {
  integrationSlackChannelsList(
    organizationId: $organizationId
    integrationId: $integrationId
  ) {
    id
    name
  }
}
    `;
export const InvitationsConnectionDocument = gql`
    query invitationsConnection($organizationId: ID!, $teamId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  invitationsConnection(
    organizationId: $organizationId
    teamId: $teamId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        email
        id
        message
      }
    }
    nodes {
      createdAt
      email
      id
      message
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const MeDocument = gql`
    query me {
  me {
    avatarUrl
    createdAt
    email
    firstName
    id
    lastName
    organizations {
      createdAt
      dataSize
      id
      name
      slug
      updatedAt
    }
    timezone
    updatedAt
  }
}
    `;
export const MyActivityLogsConnectionDocument = gql`
    query myActivityLogsConnection($organizationId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  myActivityLogsConnection(
    organizationId: $organizationId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        action
        createdAt
        entity {
          __typename
          ... on ActivityLogAttachment {
            id
            isDeleted
          }
          ... on ActivityLogCollection {
            id
            name
          }
          ... on ActivityLogFolder {
            id
            isDeleted
            name
          }
          ... on ActivityLogOrganization {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeam {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeamMember {
            id
            isDeleted
          }
          ... on ActivityLogUser {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
        }
        groupCount
        groupItems {
          action
          createdAt
          entity {
            __typename
            ... on ActivityLogAttachment {
              id
              isDeleted
            }
            ... on ActivityLogCollection {
              id
              name
            }
            ... on ActivityLogFolder {
              id
              isDeleted
              name
            }
            ... on ActivityLogOrganization {
              id
              isDeleted
              name
            }
            ... on ActivityLogTeam {
              id
              isDeleted
              name
            }
            ... on ActivityLogTeamMember {
              id
              isDeleted
            }
            ... on ActivityLogUser {
              avatarUrl
              firstName
              id
              isDeleted
              lastName
            }
          }
          groupCount
          groupItems {
            action
            createdAt
            entity {
              __typename
              ... on ActivityLogAttachment {
                id
                isDeleted
              }
              ... on ActivityLogCollection {
                id
                name
              }
              ... on ActivityLogFolder {
                id
                isDeleted
                name
              }
              ... on ActivityLogOrganization {
                id
                isDeleted
                name
              }
              ... on ActivityLogTeam {
                id
                isDeleted
                name
              }
              ... on ActivityLogTeamMember {
                id
                isDeleted
              }
              ... on ActivityLogUser {
                avatarUrl
                firstName
                id
                isDeleted
                lastName
              }
            }
            groupCount
            id
            ip
            userAgent
          }
          id
          ip
          userAgent
        }
        id
        ip
        userAgent
      }
    }
    nodes {
      action
      createdAt
      entity {
        __typename
        ... on ActivityLogAttachment {
          id
          isDeleted
        }
        ... on ActivityLogCollection {
          id
          name
        }
        ... on ActivityLogFolder {
          id
          isDeleted
          name
        }
        ... on ActivityLogOrganization {
          id
          isDeleted
          name
        }
        ... on ActivityLogTeam {
          id
          isDeleted
          name
        }
        ... on ActivityLogTeamMember {
          id
          isDeleted
        }
        ... on ActivityLogUser {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
      }
      groupCount
      groupItems {
        action
        createdAt
        entity {
          __typename
          ... on ActivityLogAttachment {
            id
            isDeleted
          }
          ... on ActivityLogCollection {
            id
            name
          }
          ... on ActivityLogFolder {
            id
            isDeleted
            name
          }
          ... on ActivityLogOrganization {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeam {
            id
            isDeleted
            name
          }
          ... on ActivityLogTeamMember {
            id
            isDeleted
          }
          ... on ActivityLogUser {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
        }
        groupCount
        id
        ip
        userAgent
      }
      id
      ip
      userAgent
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const NotificationsConnectionDocument = gql`
    query notificationsConnection($organizationId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  notificationsConnection(
    organizationId: $organizationId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        actor {
          avatarUrl
          firstName
          id
          lastName
        }
        createdAt
        eventType
        id
        readAt
      }
    }
    nodes {
      actor {
        avatarUrl
        firstName
        id
        lastName
      }
      createdAt
      eventType
      id
      readAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const OneDriveAuthorizeUrlDocument = gql`
    query oneDriveAuthorizeUrl($organizationId: ID!, $redirectUri: String!) {
  oneDriveAuthorizeUrl(organizationId: $organizationId, redirectUri: $redirectUri) {
    redirectUrl
  }
}
    `;
export const OneSearchAutocompleteListDocument = gql`
    query oneSearchAutocompleteList($organizationId: ID!, $term: String!) {
  oneSearchAutocompleteList(organizationId: $organizationId, term: $term) {
    hits {
      name
    }
  }
}
    `;
export const OneSearchListDocument = gql`
    query oneSearchList($organizationId: ID!, $term: String!) {
  oneSearchList(organizationId: $organizationId, term: $term) {
    hits {
      fileType
      id
      name
      nameHighlighted
      thumbnailUrl
    }
    suggestions {
      highlighted
      text
    }
  }
}
    `;
export const OrganizationMemberShowDocument = gql`
    query organizationMemberShow($id: ID!, $organizationId: ID!) {
  organizationMemberShow(id: $id, organizationId: $organizationId) {
    id
    invitationEmail
    invitedAt
    invitedBy {
      avatarUrl
      firstName
      id
      lastName
    }
    joinedAt
    roles {
      id
      name
    }
    state
    teams {
      id
      name
    }
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const OrganizationMembersListDocument = gql`
    query organizationMembersList($organizationId: ID!, $term: String) {
  organizationMembersList(organizationId: $organizationId, term: $term) {
    id
    invitationEmail
    invitedAt
    invitedBy {
      avatarUrl
      firstName
      id
      lastName
    }
    joinedAt
    roles {
      id
      name
    }
    state
    teams {
      id
      name
    }
    user {
      avatarUrl
      firstName
      id
      lastName
    }
  }
}
    `;
export const OrganizationSectorListDocument = gql`
    query organizationSectorList {
  organizationSectorList {
    id
    name
  }
}
    `;
export const OrganizationShowDocument = gql`
    query organizationShow($id: ID!) {
  organizationShow(id: $id) {
    createdAt
    dataSize
    id
    name
    slug
    updatedAt
  }
}
    `;
export const OrganizationStatsDocument = gql`
    query organizationStats($organizationId: ID!) {
  organizationStats(organizationId: $organizationId) {
    bytes
    date
    sizeInHuman
    statSource
  }
}
    `;
export const PermissionLookupDocument = gql`
    query permissionLookup($organizationId: ID!, $entities: [PermissionEntitiesInput!]!) {
  permissionLookup(organizationId: $organizationId, entities: $entities) {
    entityId
    entityType
    permissions {
      allowed
      permission
    }
  }
}
    `;
export const PlaceholdersListDocument = gql`
    query placeholdersList($eventType: AutomationTriggerEventTypeEnum!) {
  placeholdersList(eventType: $eventType) {
    description
    key
    label
    namespace
    returnType
  }
}
    `;
export const RolesListDocument = gql`
    query rolesList($organizationId: ID!) {
  rolesList(organizationId: $organizationId) {
    createdAt
    description
    id
    kind
    name
    permissions {
      createdAt
      group
      id
      permission
    }
    updatedAt
  }
}
    `;
export const ShareableLinksConnectionDocument = gql`
    query shareableLinksConnection($organizationId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  shareableLinksConnection(
    organizationId: $organizationId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        createdBy {
          avatarUrl
          firstName
          lastName
        }
        expiresAt
        id
        resource {
          __typename
          ... on ShareableLinkAttachment {
            id
          }
          ... on ShareableLinkCollection {
            id
          }
          ... on ShareableLinkFolder {
            id
          }
        }
        revokedAt
        title
        token
        updatedAt
      }
    }
    nodes {
      createdAt
      createdBy {
        avatarUrl
        firstName
        lastName
      }
      expiresAt
      id
      resource {
        __typename
        ... on ShareableLinkAttachment {
          id
        }
        ... on ShareableLinkCollection {
          id
        }
        ... on ShareableLinkFolder {
          id
        }
      }
      revokedAt
      title
      token
      updatedAt
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const TagsConnectionDocument = gql`
    query tagsConnection($organizationId: ID!, $term: String, $after: String, $before: String, $first: Int, $last: Int) {
  tagsConnection(
    organizationId: $organizationId
    term: $term
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        id
        name
      }
    }
    nodes {
      createdAt
      id
      name
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const TeamMembersConnectionDocument = gql`
    query teamMembersConnection($organizationId: ID!, $teamId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  teamMembersConnection(
    organizationId: $organizationId
    teamId: $teamId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        id
        updatedAt
        user {
          avatarUrl
          firstName
          lastName
        }
      }
    }
    nodes {
      createdAt
      id
      updatedAt
      user {
        avatarUrl
        firstName
        lastName
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export const TeamShowDocument = gql`
    query teamShow($after: String, $before: String, $first: Int, $last: Int, $organizationId: ID!, $id: ID!) {
  teamShow(organizationId: $organizationId, id: $id) {
    activityLogs(after: $after, before: $before, first: $first, last: $last) {
      edges {
        cursor
        node {
          action
          createdAt
          id
          ip
          user {
            avatarUrl
            firstName
            id
            isDeleted
            lastName
          }
          userAgent
        }
      }
      nodes {
        action
        createdAt
        id
        ip
        user {
          avatarUrl
          firstName
          id
          isDeleted
          lastName
        }
        userAgent
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
    createdAt
    description
    id
    name
    roles {
      description
      id
      kind
      name
      permissions {
        createdAt
        group
        id
        permission
      }
    }
    teamMembers {
      createdAt
      id
      updatedAt
      user {
        avatarUrl
        firstName
        lastName
      }
    }
    updatedAt
  }
}
    `;
export const TeamsListDocument = gql`
    query teamsList($organizationId: ID!) {
  teamsList(organizationId: $organizationId) {
    createdAt
    description
    id
    name
    teamMembers {
      createdAt
      id
      updatedAt
      user {
        avatarUrl
        firstName
        lastName
      }
    }
    updatedAt
  }
}
    `;
export const UserFavoritesConnectionDocument = gql`
    query userFavoritesConnection($organizationId: ID!, $after: String, $before: String, $first: Int, $last: Int) {
  userFavoritesConnection(
    organizationId: $organizationId
    after: $after
    before: $before
    first: $first
    last: $last
  ) {
    edges {
      cursor
      node {
        createdAt
        favorable {
          __typename
          ... on UserFavoriteAttachment {
            id
            name
            thumbnailUrl
          }
          ... on UserFavoriteCollection {
            id
            name
          }
          ... on UserFavoriteFolder {
            id
            name
          }
        }
        id
      }
    }
    nodes {
      createdAt
      favorable {
        __typename
        ... on UserFavoriteAttachment {
          id
          name
          thumbnailUrl
        }
        ... on UserFavoriteCollection {
          id
          name
        }
        ... on UserFavoriteFolder {
          id
          name
        }
      }
      id
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    attachmentTagCreate(variables: AttachmentTagCreateMutationVariables, options?: C): Promise<AttachmentTagCreateMutation> {
      return requester<AttachmentTagCreateMutation, AttachmentTagCreateMutationVariables>(AttachmentTagCreateDocument, variables, options) as Promise<AttachmentTagCreateMutation>;
    },
    attachmentTagDelete(variables: AttachmentTagDeleteMutationVariables, options?: C): Promise<AttachmentTagDeleteMutation> {
      return requester<AttachmentTagDeleteMutation, AttachmentTagDeleteMutationVariables>(AttachmentTagDeleteDocument, variables, options) as Promise<AttachmentTagDeleteMutation>;
    },
    attachmentVersionCheckout(variables: AttachmentVersionCheckoutMutationVariables, options?: C): Promise<AttachmentVersionCheckoutMutation> {
      return requester<AttachmentVersionCheckoutMutation, AttachmentVersionCheckoutMutationVariables>(AttachmentVersionCheckoutDocument, variables, options) as Promise<AttachmentVersionCheckoutMutation>;
    },
    automationRuleCreate(variables: AutomationRuleCreateMutationVariables, options?: C): Promise<AutomationRuleCreateMutation> {
      return requester<AutomationRuleCreateMutation, AutomationRuleCreateMutationVariables>(AutomationRuleCreateDocument, variables, options) as Promise<AutomationRuleCreateMutation>;
    },
    automationRuleDelete(variables: AutomationRuleDeleteMutationVariables, options?: C): Promise<AutomationRuleDeleteMutation> {
      return requester<AutomationRuleDeleteMutation, AutomationRuleDeleteMutationVariables>(AutomationRuleDeleteDocument, variables, options) as Promise<AutomationRuleDeleteMutation>;
    },
    automationRuleUpdate(variables: AutomationRuleUpdateMutationVariables, options?: C): Promise<AutomationRuleUpdateMutation> {
      return requester<AutomationRuleUpdateMutation, AutomationRuleUpdateMutationVariables>(AutomationRuleUpdateDocument, variables, options) as Promise<AutomationRuleUpdateMutation>;
    },
    collectionAddFiles(variables: CollectionAddFilesMutationVariables, options?: C): Promise<CollectionAddFilesMutation> {
      return requester<CollectionAddFilesMutation, CollectionAddFilesMutationVariables>(CollectionAddFilesDocument, variables, options) as Promise<CollectionAddFilesMutation>;
    },
    collectionCreate(variables: CollectionCreateMutationVariables, options?: C): Promise<CollectionCreateMutation> {
      return requester<CollectionCreateMutation, CollectionCreateMutationVariables>(CollectionCreateDocument, variables, options) as Promise<CollectionCreateMutation>;
    },
    collectionDelete(variables: CollectionDeleteMutationVariables, options?: C): Promise<CollectionDeleteMutation> {
      return requester<CollectionDeleteMutation, CollectionDeleteMutationVariables>(CollectionDeleteDocument, variables, options) as Promise<CollectionDeleteMutation>;
    },
    collectionRemoveFiles(variables: CollectionRemoveFilesMutationVariables, options?: C): Promise<CollectionRemoveFilesMutation> {
      return requester<CollectionRemoveFilesMutation, CollectionRemoveFilesMutationVariables>(CollectionRemoveFilesDocument, variables, options) as Promise<CollectionRemoveFilesMutation>;
    },
    collectionUpdate(variables: CollectionUpdateMutationVariables, options?: C): Promise<CollectionUpdateMutation> {
      return requester<CollectionUpdateMutation, CollectionUpdateMutationVariables>(CollectionUpdateDocument, variables, options) as Promise<CollectionUpdateMutation>;
    },
    commentCreate(variables: CommentCreateMutationVariables, options?: C): Promise<CommentCreateMutation> {
      return requester<CommentCreateMutation, CommentCreateMutationVariables>(CommentCreateDocument, variables, options) as Promise<CommentCreateMutation>;
    },
    commentDelete(variables: CommentDeleteMutationVariables, options?: C): Promise<CommentDeleteMutation> {
      return requester<CommentDeleteMutation, CommentDeleteMutationVariables>(CommentDeleteDocument, variables, options) as Promise<CommentDeleteMutation>;
    },
    commentUpdate(variables: CommentUpdateMutationVariables, options?: C): Promise<CommentUpdateMutation> {
      return requester<CommentUpdateMutation, CommentUpdateMutationVariables>(CommentUpdateDocument, variables, options) as Promise<CommentUpdateMutation>;
    },
    credentialArchiveToggle(variables: CredentialArchiveToggleMutationVariables, options?: C): Promise<CredentialArchiveToggleMutation> {
      return requester<CredentialArchiveToggleMutation, CredentialArchiveToggleMutationVariables>(CredentialArchiveToggleDocument, variables, options) as Promise<CredentialArchiveToggleMutation>;
    },
    credentialDelete(variables: CredentialDeleteMutationVariables, options?: C): Promise<CredentialDeleteMutation> {
      return requester<CredentialDeleteMutation, CredentialDeleteMutationVariables>(CredentialDeleteDocument, variables, options) as Promise<CredentialDeleteMutation>;
    },
    directUploadAbort(variables: DirectUploadAbortMutationVariables, options?: C): Promise<DirectUploadAbortMutation> {
      return requester<DirectUploadAbortMutation, DirectUploadAbortMutationVariables>(DirectUploadAbortDocument, variables, options) as Promise<DirectUploadAbortMutation>;
    },
    directUploadComplete(variables: DirectUploadCompleteMutationVariables, options?: C): Promise<DirectUploadCompleteMutation> {
      return requester<DirectUploadCompleteMutation, DirectUploadCompleteMutationVariables>(DirectUploadCompleteDocument, variables, options) as Promise<DirectUploadCompleteMutation>;
    },
    directUploadInitiate(variables: DirectUploadInitiateMutationVariables, options?: C): Promise<DirectUploadInitiateMutation> {
      return requester<DirectUploadInitiateMutation, DirectUploadInitiateMutationVariables>(DirectUploadInitiateDocument, variables, options) as Promise<DirectUploadInitiateMutation>;
    },
    downloadLinkCreate(variables: DownloadLinkCreateMutationVariables, options?: C): Promise<DownloadLinkCreateMutation> {
      return requester<DownloadLinkCreateMutation, DownloadLinkCreateMutationVariables>(DownloadLinkCreateDocument, variables, options) as Promise<DownloadLinkCreateMutation>;
    },
    downloadLinkDelete(variables: DownloadLinkDeleteMutationVariables, options?: C): Promise<DownloadLinkDeleteMutation> {
      return requester<DownloadLinkDeleteMutation, DownloadLinkDeleteMutationVariables>(DownloadLinkDeleteDocument, variables, options) as Promise<DownloadLinkDeleteMutation>;
    },
    downloadLinkRevoke(variables: DownloadLinkRevokeMutationVariables, options?: C): Promise<DownloadLinkRevokeMutation> {
      return requester<DownloadLinkRevokeMutation, DownloadLinkRevokeMutationVariables>(DownloadLinkRevokeDocument, variables, options) as Promise<DownloadLinkRevokeMutation>;
    },
    fileEmptyTrash(variables: FileEmptyTrashMutationVariables, options?: C): Promise<FileEmptyTrashMutation> {
      return requester<FileEmptyTrashMutation, FileEmptyTrashMutationVariables>(FileEmptyTrashDocument, variables, options) as Promise<FileEmptyTrashMutation>;
    },
    fileMoveToTrash(variables: FileMoveToTrashMutationVariables, options?: C): Promise<FileMoveToTrashMutation> {
      return requester<FileMoveToTrashMutation, FileMoveToTrashMutationVariables>(FileMoveToTrashDocument, variables, options) as Promise<FileMoveToTrashMutation>;
    },
    fileRestoreFromTrash(variables: FileRestoreFromTrashMutationVariables, options?: C): Promise<FileRestoreFromTrashMutation> {
      return requester<FileRestoreFromTrashMutation, FileRestoreFromTrashMutationVariables>(FileRestoreFromTrashDocument, variables, options) as Promise<FileRestoreFromTrashMutation>;
    },
    folderCreate(variables: FolderCreateMutationVariables, options?: C): Promise<FolderCreateMutation> {
      return requester<FolderCreateMutation, FolderCreateMutationVariables>(FolderCreateDocument, variables, options) as Promise<FolderCreateMutation>;
    },
    folderMove(variables: FolderMoveMutationVariables, options?: C): Promise<FolderMoveMutation> {
      return requester<FolderMoveMutation, FolderMoveMutationVariables>(FolderMoveDocument, variables, options) as Promise<FolderMoveMutation>;
    },
    folderRename(variables: FolderRenameMutationVariables, options?: C): Promise<FolderRenameMutation> {
      return requester<FolderRenameMutation, FolderRenameMutationVariables>(FolderRenameDocument, variables, options) as Promise<FolderRenameMutation>;
    },
    importFromDrive(variables: ImportFromDriveMutationVariables, options?: C): Promise<ImportFromDriveMutation> {
      return requester<ImportFromDriveMutation, ImportFromDriveMutationVariables>(ImportFromDriveDocument, variables, options) as Promise<ImportFromDriveMutation>;
    },
    importFromOneDrive(variables: ImportFromOneDriveMutationVariables, options?: C): Promise<ImportFromOneDriveMutation> {
      return requester<ImportFromOneDriveMutation, ImportFromOneDriveMutationVariables>(ImportFromOneDriveDocument, variables, options) as Promise<ImportFromOneDriveMutation>;
    },
    invitationAccept(variables: InvitationAcceptMutationVariables, options?: C): Promise<InvitationAcceptMutation> {
      return requester<InvitationAcceptMutation, InvitationAcceptMutationVariables>(InvitationAcceptDocument, variables, options) as Promise<InvitationAcceptMutation>;
    },
    meUpdate(variables: MeUpdateMutationVariables, options?: C): Promise<MeUpdateMutation> {
      return requester<MeUpdateMutation, MeUpdateMutationVariables>(MeUpdateDocument, variables, options) as Promise<MeUpdateMutation>;
    },
    notificationDelete(variables: NotificationDeleteMutationVariables, options?: C): Promise<NotificationDeleteMutation> {
      return requester<NotificationDeleteMutation, NotificationDeleteMutationVariables>(NotificationDeleteDocument, variables, options) as Promise<NotificationDeleteMutation>;
    },
    notificationMarkAsRead(variables: NotificationMarkAsReadMutationVariables, options?: C): Promise<NotificationMarkAsReadMutation> {
      return requester<NotificationMarkAsReadMutation, NotificationMarkAsReadMutationVariables>(NotificationMarkAsReadDocument, variables, options) as Promise<NotificationMarkAsReadMutation>;
    },
    organizationCreate(variables: OrganizationCreateMutationVariables, options?: C): Promise<OrganizationCreateMutation> {
      return requester<OrganizationCreateMutation, OrganizationCreateMutationVariables>(OrganizationCreateDocument, variables, options) as Promise<OrganizationCreateMutation>;
    },
    organizationMemberCreate(variables: OrganizationMemberCreateMutationVariables, options?: C): Promise<OrganizationMemberCreateMutation> {
      return requester<OrganizationMemberCreateMutation, OrganizationMemberCreateMutationVariables>(OrganizationMemberCreateDocument, variables, options) as Promise<OrganizationMemberCreateMutation>;
    },
    organizationMemberDelete(variables: OrganizationMemberDeleteMutationVariables, options?: C): Promise<OrganizationMemberDeleteMutation> {
      return requester<OrganizationMemberDeleteMutation, OrganizationMemberDeleteMutationVariables>(OrganizationMemberDeleteDocument, variables, options) as Promise<OrganizationMemberDeleteMutation>;
    },
    organizationMemberUpdate(variables: OrganizationMemberUpdateMutationVariables, options?: C): Promise<OrganizationMemberUpdateMutation> {
      return requester<OrganizationMemberUpdateMutation, OrganizationMemberUpdateMutationVariables>(OrganizationMemberUpdateDocument, variables, options) as Promise<OrganizationMemberUpdateMutation>;
    },
    organizationUpdate(variables: OrganizationUpdateMutationVariables, options?: C): Promise<OrganizationUpdateMutation> {
      return requester<OrganizationUpdateMutation, OrganizationUpdateMutationVariables>(OrganizationUpdateDocument, variables, options) as Promise<OrganizationUpdateMutation>;
    },
    roleCreate(variables: RoleCreateMutationVariables, options?: C): Promise<RoleCreateMutation> {
      return requester<RoleCreateMutation, RoleCreateMutationVariables>(RoleCreateDocument, variables, options) as Promise<RoleCreateMutation>;
    },
    roleDelete(variables: RoleDeleteMutationVariables, options?: C): Promise<RoleDeleteMutation> {
      return requester<RoleDeleteMutation, RoleDeleteMutationVariables>(RoleDeleteDocument, variables, options) as Promise<RoleDeleteMutation>;
    },
    roleUpdate(variables: RoleUpdateMutationVariables, options?: C): Promise<RoleUpdateMutation> {
      return requester<RoleUpdateMutation, RoleUpdateMutationVariables>(RoleUpdateDocument, variables, options) as Promise<RoleUpdateMutation>;
    },
    shareableLinkCreate(variables: ShareableLinkCreateMutationVariables, options?: C): Promise<ShareableLinkCreateMutation> {
      return requester<ShareableLinkCreateMutation, ShareableLinkCreateMutationVariables>(ShareableLinkCreateDocument, variables, options) as Promise<ShareableLinkCreateMutation>;
    },
    shareableLinkDelete(variables: ShareableLinkDeleteMutationVariables, options?: C): Promise<ShareableLinkDeleteMutation> {
      return requester<ShareableLinkDeleteMutation, ShareableLinkDeleteMutationVariables>(ShareableLinkDeleteDocument, variables, options) as Promise<ShareableLinkDeleteMutation>;
    },
    teamCreate(variables: TeamCreateMutationVariables, options?: C): Promise<TeamCreateMutation> {
      return requester<TeamCreateMutation, TeamCreateMutationVariables>(TeamCreateDocument, variables, options) as Promise<TeamCreateMutation>;
    },
    teamDelete(variables: TeamDeleteMutationVariables, options?: C): Promise<TeamDeleteMutation> {
      return requester<TeamDeleteMutation, TeamDeleteMutationVariables>(TeamDeleteDocument, variables, options) as Promise<TeamDeleteMutation>;
    },
    teamMemberCreate(variables: TeamMemberCreateMutationVariables, options?: C): Promise<TeamMemberCreateMutation> {
      return requester<TeamMemberCreateMutation, TeamMemberCreateMutationVariables>(TeamMemberCreateDocument, variables, options) as Promise<TeamMemberCreateMutation>;
    },
    teamMemberDelete(variables: TeamMemberDeleteMutationVariables, options?: C): Promise<TeamMemberDeleteMutation> {
      return requester<TeamMemberDeleteMutation, TeamMemberDeleteMutationVariables>(TeamMemberDeleteDocument, variables, options) as Promise<TeamMemberDeleteMutation>;
    },
    teamUpdate(variables: TeamUpdateMutationVariables, options?: C): Promise<TeamUpdateMutation> {
      return requester<TeamUpdateMutation, TeamUpdateMutationVariables>(TeamUpdateDocument, variables, options) as Promise<TeamUpdateMutation>;
    },
    uploadJobStart(variables: UploadJobStartMutationVariables, options?: C): Promise<UploadJobStartMutation> {
      return requester<UploadJobStartMutation, UploadJobStartMutationVariables>(UploadJobStartDocument, variables, options) as Promise<UploadJobStartMutation>;
    },
    uploadJobUpdate(variables: UploadJobUpdateMutationVariables, options?: C): Promise<UploadJobUpdateMutation> {
      return requester<UploadJobUpdateMutation, UploadJobUpdateMutationVariables>(UploadJobUpdateDocument, variables, options) as Promise<UploadJobUpdateMutation>;
    },
    userFavoriteCreate(variables: UserFavoriteCreateMutationVariables, options?: C): Promise<UserFavoriteCreateMutation> {
      return requester<UserFavoriteCreateMutation, UserFavoriteCreateMutationVariables>(UserFavoriteCreateDocument, variables, options) as Promise<UserFavoriteCreateMutation>;
    },
    userFavoriteDelete(variables: UserFavoriteDeleteMutationVariables, options?: C): Promise<UserFavoriteDeleteMutation> {
      return requester<UserFavoriteDeleteMutation, UserFavoriteDeleteMutationVariables>(UserFavoriteDeleteDocument, variables, options) as Promise<UserFavoriteDeleteMutation>;
    },
    activityLogsConnection(variables: ActivityLogsConnectionQueryVariables, options?: C): Promise<ActivityLogsConnectionQuery> {
      return requester<ActivityLogsConnectionQuery, ActivityLogsConnectionQueryVariables>(ActivityLogsConnectionDocument, variables, options) as Promise<ActivityLogsConnectionQuery>;
    },
    attachmentShow(variables: AttachmentShowQueryVariables, options?: C): Promise<AttachmentShowQuery> {
      return requester<AttachmentShowQuery, AttachmentShowQueryVariables>(AttachmentShowDocument, variables, options) as Promise<AttachmentShowQuery>;
    },
    attachmentVersionsConnection(variables: AttachmentVersionsConnectionQueryVariables, options?: C): Promise<AttachmentVersionsConnectionQuery> {
      return requester<AttachmentVersionsConnectionQuery, AttachmentVersionsConnectionQueryVariables>(AttachmentVersionsConnectionDocument, variables, options) as Promise<AttachmentVersionsConnectionQuery>;
    },
    attachmentsConnection(variables: AttachmentsConnectionQueryVariables, options?: C): Promise<AttachmentsConnectionQuery> {
      return requester<AttachmentsConnectionQuery, AttachmentsConnectionQueryVariables>(AttachmentsConnectionDocument, variables, options) as Promise<AttachmentsConnectionQuery>;
    },
    automationRulesList(variables: AutomationRulesListQueryVariables, options?: C): Promise<AutomationRulesListQuery> {
      return requester<AutomationRulesListQuery, AutomationRulesListQueryVariables>(AutomationRulesListDocument, variables, options) as Promise<AutomationRulesListQuery>;
    },
    beingUploadedFiles(variables: BeingUploadedFilesQueryVariables, options?: C): Promise<BeingUploadedFilesQuery> {
      return requester<BeingUploadedFilesQuery, BeingUploadedFilesQueryVariables>(BeingUploadedFilesDocument, variables, options) as Promise<BeingUploadedFilesQuery>;
    },
    collectionFilesConnection(variables: CollectionFilesConnectionQueryVariables, options?: C): Promise<CollectionFilesConnectionQuery> {
      return requester<CollectionFilesConnectionQuery, CollectionFilesConnectionQueryVariables>(CollectionFilesConnectionDocument, variables, options) as Promise<CollectionFilesConnectionQuery>;
    },
    collectionsConnection(variables: CollectionsConnectionQueryVariables, options?: C): Promise<CollectionsConnectionQuery> {
      return requester<CollectionsConnectionQuery, CollectionsConnectionQueryVariables>(CollectionsConnectionDocument, variables, options) as Promise<CollectionsConnectionQuery>;
    },
    commentsConnection(variables: CommentsConnectionQueryVariables, options?: C): Promise<CommentsConnectionQuery> {
      return requester<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, variables, options) as Promise<CommentsConnectionQuery>;
    },
    credentialAuthLink(variables: CredentialAuthLinkQueryVariables, options?: C): Promise<CredentialAuthLinkQuery> {
      return requester<CredentialAuthLinkQuery, CredentialAuthLinkQueryVariables>(CredentialAuthLinkDocument, variables, options) as Promise<CredentialAuthLinkQuery>;
    },
    credentialsList(variables: CredentialsListQueryVariables, options?: C): Promise<CredentialsListQuery> {
      return requester<CredentialsListQuery, CredentialsListQueryVariables>(CredentialsListDocument, variables, options) as Promise<CredentialsListQuery>;
    },
    directUploadListParts(variables: DirectUploadListPartsQueryVariables, options?: C): Promise<DirectUploadListPartsQuery> {
      return requester<DirectUploadListPartsQuery, DirectUploadListPartsQueryVariables>(DirectUploadListPartsDocument, variables, options) as Promise<DirectUploadListPartsQuery>;
    },
    directUploadPrepareUploadPart(variables: DirectUploadPrepareUploadPartQueryVariables, options?: C): Promise<DirectUploadPrepareUploadPartQuery> {
      return requester<DirectUploadPrepareUploadPartQuery, DirectUploadPrepareUploadPartQueryVariables>(DirectUploadPrepareUploadPartDocument, variables, options) as Promise<DirectUploadPrepareUploadPartQuery>;
    },
    downloadLinksConnection(variables: DownloadLinksConnectionQueryVariables, options?: C): Promise<DownloadLinksConnectionQuery> {
      return requester<DownloadLinksConnectionQuery, DownloadLinksConnectionQueryVariables>(DownloadLinksConnectionDocument, variables, options) as Promise<DownloadLinksConnectionQuery>;
    },
    folderShow(variables: FolderShowQueryVariables, options?: C): Promise<FolderShowQuery> {
      return requester<FolderShowQuery, FolderShowQueryVariables>(FolderShowDocument, variables, options) as Promise<FolderShowQuery>;
    },
    foldersConnection(variables: FoldersConnectionQueryVariables, options?: C): Promise<FoldersConnectionQuery> {
      return requester<FoldersConnectionQuery, FoldersConnectionQueryVariables>(FoldersConnectionDocument, variables, options) as Promise<FoldersConnectionQuery>;
    },
    foldersFullList(variables: FoldersFullListQueryVariables, options?: C): Promise<FoldersFullListQuery> {
      return requester<FoldersFullListQuery, FoldersFullListQueryVariables>(FoldersFullListDocument, variables, options) as Promise<FoldersFullListQuery>;
    },
    integrationSlackChannelsList(variables: IntegrationSlackChannelsListQueryVariables, options?: C): Promise<IntegrationSlackChannelsListQuery> {
      return requester<IntegrationSlackChannelsListQuery, IntegrationSlackChannelsListQueryVariables>(IntegrationSlackChannelsListDocument, variables, options) as Promise<IntegrationSlackChannelsListQuery>;
    },
    invitationsConnection(variables: InvitationsConnectionQueryVariables, options?: C): Promise<InvitationsConnectionQuery> {
      return requester<InvitationsConnectionQuery, InvitationsConnectionQueryVariables>(InvitationsConnectionDocument, variables, options) as Promise<InvitationsConnectionQuery>;
    },
    me(variables?: MeQueryVariables, options?: C): Promise<MeQuery> {
      return requester<MeQuery, MeQueryVariables>(MeDocument, variables, options) as Promise<MeQuery>;
    },
    myActivityLogsConnection(variables: MyActivityLogsConnectionQueryVariables, options?: C): Promise<MyActivityLogsConnectionQuery> {
      return requester<MyActivityLogsConnectionQuery, MyActivityLogsConnectionQueryVariables>(MyActivityLogsConnectionDocument, variables, options) as Promise<MyActivityLogsConnectionQuery>;
    },
    notificationsConnection(variables: NotificationsConnectionQueryVariables, options?: C): Promise<NotificationsConnectionQuery> {
      return requester<NotificationsConnectionQuery, NotificationsConnectionQueryVariables>(NotificationsConnectionDocument, variables, options) as Promise<NotificationsConnectionQuery>;
    },
    oneDriveAuthorizeUrl(variables: OneDriveAuthorizeUrlQueryVariables, options?: C): Promise<OneDriveAuthorizeUrlQuery> {
      return requester<OneDriveAuthorizeUrlQuery, OneDriveAuthorizeUrlQueryVariables>(OneDriveAuthorizeUrlDocument, variables, options) as Promise<OneDriveAuthorizeUrlQuery>;
    },
    oneSearchAutocompleteList(variables: OneSearchAutocompleteListQueryVariables, options?: C): Promise<OneSearchAutocompleteListQuery> {
      return requester<OneSearchAutocompleteListQuery, OneSearchAutocompleteListQueryVariables>(OneSearchAutocompleteListDocument, variables, options) as Promise<OneSearchAutocompleteListQuery>;
    },
    oneSearchList(variables: OneSearchListQueryVariables, options?: C): Promise<OneSearchListQuery> {
      return requester<OneSearchListQuery, OneSearchListQueryVariables>(OneSearchListDocument, variables, options) as Promise<OneSearchListQuery>;
    },
    organizationMemberShow(variables: OrganizationMemberShowQueryVariables, options?: C): Promise<OrganizationMemberShowQuery> {
      return requester<OrganizationMemberShowQuery, OrganizationMemberShowQueryVariables>(OrganizationMemberShowDocument, variables, options) as Promise<OrganizationMemberShowQuery>;
    },
    organizationMembersList(variables: OrganizationMembersListQueryVariables, options?: C): Promise<OrganizationMembersListQuery> {
      return requester<OrganizationMembersListQuery, OrganizationMembersListQueryVariables>(OrganizationMembersListDocument, variables, options) as Promise<OrganizationMembersListQuery>;
    },
    organizationSectorList(variables?: OrganizationSectorListQueryVariables, options?: C): Promise<OrganizationSectorListQuery> {
      return requester<OrganizationSectorListQuery, OrganizationSectorListQueryVariables>(OrganizationSectorListDocument, variables, options) as Promise<OrganizationSectorListQuery>;
    },
    organizationShow(variables: OrganizationShowQueryVariables, options?: C): Promise<OrganizationShowQuery> {
      return requester<OrganizationShowQuery, OrganizationShowQueryVariables>(OrganizationShowDocument, variables, options) as Promise<OrganizationShowQuery>;
    },
    organizationStats(variables: OrganizationStatsQueryVariables, options?: C): Promise<OrganizationStatsQuery> {
      return requester<OrganizationStatsQuery, OrganizationStatsQueryVariables>(OrganizationStatsDocument, variables, options) as Promise<OrganizationStatsQuery>;
    },
    permissionLookup(variables: PermissionLookupQueryVariables, options?: C): Promise<PermissionLookupQuery> {
      return requester<PermissionLookupQuery, PermissionLookupQueryVariables>(PermissionLookupDocument, variables, options) as Promise<PermissionLookupQuery>;
    },
    placeholdersList(variables: PlaceholdersListQueryVariables, options?: C): Promise<PlaceholdersListQuery> {
      return requester<PlaceholdersListQuery, PlaceholdersListQueryVariables>(PlaceholdersListDocument, variables, options) as Promise<PlaceholdersListQuery>;
    },
    rolesList(variables: RolesListQueryVariables, options?: C): Promise<RolesListQuery> {
      return requester<RolesListQuery, RolesListQueryVariables>(RolesListDocument, variables, options) as Promise<RolesListQuery>;
    },
    shareableLinksConnection(variables: ShareableLinksConnectionQueryVariables, options?: C): Promise<ShareableLinksConnectionQuery> {
      return requester<ShareableLinksConnectionQuery, ShareableLinksConnectionQueryVariables>(ShareableLinksConnectionDocument, variables, options) as Promise<ShareableLinksConnectionQuery>;
    },
    tagsConnection(variables: TagsConnectionQueryVariables, options?: C): Promise<TagsConnectionQuery> {
      return requester<TagsConnectionQuery, TagsConnectionQueryVariables>(TagsConnectionDocument, variables, options) as Promise<TagsConnectionQuery>;
    },
    teamMembersConnection(variables: TeamMembersConnectionQueryVariables, options?: C): Promise<TeamMembersConnectionQuery> {
      return requester<TeamMembersConnectionQuery, TeamMembersConnectionQueryVariables>(TeamMembersConnectionDocument, variables, options) as Promise<TeamMembersConnectionQuery>;
    },
    teamShow(variables: TeamShowQueryVariables, options?: C): Promise<TeamShowQuery> {
      return requester<TeamShowQuery, TeamShowQueryVariables>(TeamShowDocument, variables, options) as Promise<TeamShowQuery>;
    },
    teamsList(variables: TeamsListQueryVariables, options?: C): Promise<TeamsListQuery> {
      return requester<TeamsListQuery, TeamsListQueryVariables>(TeamsListDocument, variables, options) as Promise<TeamsListQuery>;
    },
    userFavoritesConnection(variables: UserFavoritesConnectionQueryVariables, options?: C): Promise<UserFavoritesConnectionQuery> {
      return requester<UserFavoritesConnectionQuery, UserFavoritesConnectionQueryVariables>(UserFavoritesConnectionDocument, variables, options) as Promise<UserFavoritesConnectionQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

// This additional logic appended by playwright-graphql cli to ensure seamless integration
import { getSdkRequester } from 'playwright-graphql';

export type APIRequestContext = Parameters<typeof getSdkRequester>[0];
export type RequesterOptions = Parameters<typeof getSdkRequester>[1] | string;
export type RequestHandler = Parameters<typeof getSdkRequester>[2];

export const getClient = (apiContext: APIRequestContext, options?: RequesterOptions, requestHandler?: RequestHandler) => getSdk(getSdkRequester(apiContext, options, requestHandler));

export type GqlAPI = ReturnType<typeof getClient>;

