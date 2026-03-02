import type { GqlAPI } from '../graphql';

export abstract class ApiBase {
  constructor(protected gql: GqlAPI) {}
}
