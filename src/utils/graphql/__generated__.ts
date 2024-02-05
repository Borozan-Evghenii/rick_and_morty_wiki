import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Upload: { input: any; output: any };
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  readonly __typename?: 'Character';
  /** Time at which the character was created in the database. */
  readonly created: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  readonly episode: ReadonlyArray<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  readonly gender: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  readonly id: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  readonly image: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  readonly location: Maybe<Location>;
  /** The name of the character. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  readonly origin: Maybe<Location>;
  /** The species of the character. */
  readonly species: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  readonly status: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  readonly type: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  readonly __typename?: 'Characters';
  readonly info: Maybe<Info>;
  readonly results: Maybe<ReadonlyArray<Maybe<Character>>>;
};

export type Episode = {
  readonly __typename?: 'Episode';
  /** The air date of the episode. */
  readonly air_date: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  readonly characters: ReadonlyArray<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  readonly created: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  readonly episode: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  readonly id: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  readonly name: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  readonly __typename?: 'Episodes';
  readonly info: Maybe<Info>;
  readonly results: Maybe<ReadonlyArray<Maybe<Episode>>>;
};

export type FilterCharacter = {
  readonly gender: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly species: InputMaybe<Scalars['String']['input']>;
  readonly status: InputMaybe<Scalars['String']['input']>;
  readonly type: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  readonly episode: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  readonly dimension: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly type: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  readonly __typename?: 'Info';
  /** The length of the response. */
  readonly count: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  readonly next: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  readonly pages: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  readonly prev: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  readonly __typename?: 'Location';
  /** Time at which the location was created in the database. */
  readonly created: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  readonly dimension: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  readonly id: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  readonly name: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  readonly residents: ReadonlyArray<Maybe<Character>>;
  /** The type of the location. */
  readonly type: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  readonly __typename?: 'Locations';
  readonly info: Maybe<Info>;
  readonly results: Maybe<ReadonlyArray<Maybe<Location>>>;
};

export type Query = {
  readonly __typename?: 'Query';
  /** Get a specific character by ID */
  readonly character: Maybe<Character>;
  /** Get the list of all characters */
  readonly characters: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  readonly charactersByIds: Maybe<ReadonlyArray<Maybe<Character>>>;
  /** Get a specific episode by ID */
  readonly episode: Maybe<Episode>;
  /** Get the list of all episodes */
  readonly episodes: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  readonly episodesByIds: Maybe<ReadonlyArray<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  readonly location: Maybe<Location>;
  /** Get the list of all locations */
  readonly locations: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  readonly locationsByIds: Maybe<ReadonlyArray<Maybe<Location>>>;
};

export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};

export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>;
  page: InputMaybe<Scalars['Int']['input']>;
};

export type QueryCharactersByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>;
  page: InputMaybe<Scalars['Int']['input']>;
};

export type QueryEpisodesByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLocationsByIdsArgs = {
  ids: ReadonlyArray<Scalars['ID']['input']>;
};

export type CharacterCardFragmentFragment = {
  readonly __typename?: 'Character';
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly species: string;
};

export type FullCharacterInfoFragment = {
  readonly __typename?: 'Character';
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly species: string;
  readonly status: string;
  readonly gender: string;
  readonly image: string;
  readonly episode: ReadonlyArray<{
    readonly __typename?: 'Episode';
    readonly id: string;
    readonly name: string;
    readonly episode: string;
    readonly air_date: string;
    readonly characters: ReadonlyArray<{
      readonly __typename?: 'Character';
      readonly id: string;
      readonly image: string;
      readonly name: string;
      readonly species: string;
    }>;
  }>;
  readonly origin: { readonly __typename?: 'Location'; readonly name: string; readonly id: string };
  readonly location: {
    readonly __typename?: 'Location';
    readonly id: string;
    readonly name: string;
  };
};

export type EpisodeCardFragment = {
  readonly __typename?: 'Episode';
  readonly id: string;
  readonly name: string;
  readonly episode: string;
  readonly air_date: string;
  readonly characters: ReadonlyArray<{
    readonly __typename?: 'Character';
    readonly id: string;
    readonly image: string;
    readonly name: string;
    readonly species: string;
  }>;
};

export type LocationCardFragment = {
  readonly __typename?: 'Location';
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly dimension: string;
  readonly residents: ReadonlyArray<{
    readonly __typename?: 'Character';
    readonly id: string;
    readonly image: string;
    readonly name: string;
    readonly species: string;
  }>;
};

export type ResponseInfoFragment = {
  readonly __typename?: 'Info';
  readonly count: number;
  readonly pages: number;
  readonly next: number;
  readonly prev: number;
};

export type GetAllCharactersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCharactersQuery = {
  readonly __typename?: 'Query';
  readonly characters: {
    readonly __typename?: 'Characters';
    readonly info: {
      readonly __typename?: 'Info';
      readonly count: number;
      readonly pages: number;
      readonly next: number;
      readonly prev: number;
    };
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Character';
      readonly id: string;
      readonly image: string;
      readonly name: string;
      readonly species: string;
    }>;
  };
};

export type GetCharacterByIdQueryVariables = Exact<{
  ids: ReadonlyArray<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetCharacterByIdQuery = {
  readonly __typename?: 'Query';
  readonly charactersByIds: ReadonlyArray<{
    readonly __typename?: 'Character';
    readonly id: string;
    readonly name: string;
    readonly type: string;
    readonly species: string;
    readonly status: string;
    readonly gender: string;
    readonly image: string;
    readonly episode: ReadonlyArray<{
      readonly __typename?: 'Episode';
      readonly id: string;
      readonly name: string;
      readonly episode: string;
      readonly air_date: string;
      readonly characters: ReadonlyArray<{
        readonly __typename?: 'Character';
        readonly id: string;
        readonly image: string;
        readonly name: string;
        readonly species: string;
      }>;
    }>;
    readonly origin: {
      readonly __typename?: 'Location';
      readonly name: string;
      readonly id: string;
    };
    readonly location: {
      readonly __typename?: 'Location';
      readonly id: string;
      readonly name: string;
    };
  }>;
};

export type GetFilterCharactersQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  species: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  gender: InputMaybe<Scalars['String']['input']>;
}>;

export type GetFilterCharactersQuery = {
  readonly __typename?: 'Query';
  readonly characters: {
    readonly __typename?: 'Characters';
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Character';
      readonly id: string;
      readonly image: string;
      readonly name: string;
      readonly species: string;
    }>;
  };
};

export type GetAllEpisodesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllEpisodesQuery = {
  readonly __typename?: 'Query';
  readonly episodes: {
    readonly __typename?: 'Episodes';
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Episode';
      readonly id: string;
      readonly name: string;
      readonly episode: string;
      readonly air_date: string;
      readonly characters: ReadonlyArray<{
        readonly __typename?: 'Character';
        readonly id: string;
        readonly image: string;
        readonly name: string;
        readonly species: string;
      }>;
    }>;
  };
};

export type GetEpisodeByIdQueryVariables = Exact<{
  id: ReadonlyArray<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetEpisodeByIdQuery = {
  readonly __typename?: 'Query';
  readonly episodesByIds: ReadonlyArray<{
    readonly __typename?: 'Episode';
    readonly id: string;
    readonly name: string;
    readonly air_date: string;
    readonly characters: ReadonlyArray<{
      readonly __typename?: 'Character';
      readonly id: string;
      readonly image: string;
      readonly name: string;
      readonly species: string;
    }>;
  }>;
};

export type GetFilterEpisodesQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  episode: InputMaybe<Scalars['String']['input']>;
}>;

export type GetFilterEpisodesQuery = {
  readonly __typename?: 'Query';
  readonly episodes: {
    readonly __typename?: 'Episodes';
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Episode';
      readonly id: string;
      readonly name: string;
      readonly episode: string;
      readonly air_date: string;
      readonly characters: ReadonlyArray<{
        readonly __typename?: 'Character';
        readonly id: string;
        readonly image: string;
        readonly name: string;
        readonly species: string;
      }>;
    }>;
  };
};

export type GetAllLocationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllLocationsQuery = {
  readonly __typename?: 'Query';
  readonly locations: {
    readonly __typename?: 'Locations';
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Location';
      readonly id: string;
      readonly name: string;
      readonly type: string;
      readonly dimension: string;
      readonly residents: ReadonlyArray<{
        readonly __typename?: 'Character';
        readonly id: string;
        readonly image: string;
        readonly name: string;
        readonly species: string;
      }>;
    }>;
  };
};

export type GetFilterLocationsQueryVariables = Exact<{
  name: InputMaybe<Scalars['String']['input']>;
  dimension: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
}>;

export type GetFilterLocationsQuery = {
  readonly __typename?: 'Query';
  readonly locations: {
    readonly __typename?: 'Locations';
    readonly results: ReadonlyArray<{
      readonly __typename?: 'Location';
      readonly id: string;
      readonly name: string;
      readonly type: string;
      readonly dimension: string;
      readonly residents: ReadonlyArray<{
        readonly __typename?: 'Character';
        readonly id: string;
        readonly image: string;
        readonly name: string;
        readonly species: string;
      }>;
    }>;
  };
};

export type GetLocationByIdQueryVariables = Exact<{
  ids: ReadonlyArray<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetLocationByIdQuery = {
  readonly __typename?: 'Query';
  readonly locationsByIds: ReadonlyArray<{
    readonly __typename?: 'Location';
    readonly name: string;
    readonly dimension: string;
    readonly residents: ReadonlyArray<{
      readonly __typename?: 'Character';
      readonly id: string;
      readonly image: string;
      readonly name: string;
      readonly species: string;
    }>;
  }>;
};

export const CharacterCardFragmentFragmentDoc = gql`
  fragment CharacterCardFragment on Character {
    id
    image
    name
    species
  }
`;
export const EpisodeCardFragmentDoc = gql`
  fragment EpisodeCard on Episode {
    id
    name
    episode
    air_date
    characters {
      ...CharacterCardFragment
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;
export const FullCharacterInfoFragmentDoc = gql`
  fragment fullCharacterInfo on Character {
    id
    name
    type
    species
    status
    gender
    image
    episode {
      ...EpisodeCard
    }
    origin {
      name
      id
    }
    location {
      id
      name
    }
  }
  ${EpisodeCardFragmentDoc}
`;
export const LocationCardFragmentDoc = gql`
  fragment LocationCard on Location {
    id
    name
    type
    dimension
    residents {
      ...CharacterCardFragment
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;
export const ResponseInfoFragmentDoc = gql`
  fragment responseInfo on Info {
    count
    pages
    next
    prev
  }
`;
export const GetAllCharactersDocument = gql`
  query getAllCharacters {
    characters {
      info {
        ...responseInfo
      }
      results {
        ...CharacterCardFragment
      }
    }
  }
  ${ResponseInfoFragmentDoc}
  ${CharacterCardFragmentFragmentDoc}
`;

/**
 * __useGetAllCharactersQuery__
 *
 * To run a query within a React component, call `useGetAllCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllCharactersQuery, GetAllCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllCharactersQuery, GetAllCharactersQueryVariables>(
    GetAllCharactersDocument,
    options
  );
}
export function useGetAllCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllCharactersQuery, GetAllCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllCharactersQuery, GetAllCharactersQueryVariables>(
    GetAllCharactersDocument,
    options
  );
}
export function useGetAllCharactersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllCharactersQuery,
    GetAllCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllCharactersQuery, GetAllCharactersQueryVariables>(
    GetAllCharactersDocument,
    options
  );
}
export type GetAllCharactersQueryHookResult = ReturnType<typeof useGetAllCharactersQuery>;
export type GetAllCharactersLazyQueryHookResult = ReturnType<typeof useGetAllCharactersLazyQuery>;
export type GetAllCharactersSuspenseQueryHookResult = ReturnType<
  typeof useGetAllCharactersSuspenseQuery
>;
export type GetAllCharactersQueryResult = Apollo.QueryResult<
  GetAllCharactersQuery,
  GetAllCharactersQueryVariables
>;
export const GetCharacterByIdDocument = gql`
  query getCharacterById($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      ...fullCharacterInfo
    }
  }
  ${FullCharacterInfoFragmentDoc}
`;

/**
 * __useGetCharacterByIdQuery__
 *
 * To run a query within a React component, call `useGetCharacterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetCharacterByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(
    GetCharacterByIdDocument,
    options
  );
}
export function useGetCharacterByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(
    GetCharacterByIdDocument,
    options
  );
}
export function useGetCharacterByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCharacterByIdQuery,
    GetCharacterByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(
    GetCharacterByIdDocument,
    options
  );
}
export type GetCharacterByIdQueryHookResult = ReturnType<typeof useGetCharacterByIdQuery>;
export type GetCharacterByIdLazyQueryHookResult = ReturnType<typeof useGetCharacterByIdLazyQuery>;
export type GetCharacterByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetCharacterByIdSuspenseQuery
>;
export type GetCharacterByIdQueryResult = Apollo.QueryResult<
  GetCharacterByIdQuery,
  GetCharacterByIdQueryVariables
>;
export const GetFilterCharactersDocument = gql`
  query getFilterCharacters(
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    characters(
      filter: { name: $name, status: $status, species: $species, type: $type, gender: $gender }
    ) {
      results {
        ...CharacterCardFragment
      }
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;

/**
 * __useGetFilterCharactersQuery__
 *
 * To run a query within a React component, call `useGetFilterCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterCharactersQuery({
 *   variables: {
 *      name: // value for 'name'
 *      status: // value for 'status'
 *      species: // value for 'species'
 *      type: // value for 'type'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useGetFilterCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFilterCharactersQuery, GetFilterCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilterCharactersQuery, GetFilterCharactersQueryVariables>(
    GetFilterCharactersDocument,
    options
  );
}
export function useGetFilterCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilterCharactersQuery, GetFilterCharactersQueryVariables>(
    GetFilterCharactersDocument,
    options
  );
}
export function useGetFilterCharactersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFilterCharactersQuery,
    GetFilterCharactersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetFilterCharactersQuery, GetFilterCharactersQueryVariables>(
    GetFilterCharactersDocument,
    options
  );
}
export type GetFilterCharactersQueryHookResult = ReturnType<typeof useGetFilterCharactersQuery>;
export type GetFilterCharactersLazyQueryHookResult = ReturnType<
  typeof useGetFilterCharactersLazyQuery
>;
export type GetFilterCharactersSuspenseQueryHookResult = ReturnType<
  typeof useGetFilterCharactersSuspenseQuery
>;
export type GetFilterCharactersQueryResult = Apollo.QueryResult<
  GetFilterCharactersQuery,
  GetFilterCharactersQueryVariables
>;
export const GetAllEpisodesDocument = gql`
  query getAllEpisodes {
    episodes {
      results {
        ...EpisodeCard
      }
    }
  }
  ${EpisodeCardFragmentDoc}
`;

/**
 * __useGetAllEpisodesQuery__
 *
 * To run a query within a React component, call `useGetAllEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEpisodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>(
    GetAllEpisodesDocument,
    options
  );
}
export function useGetAllEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>(
    GetAllEpisodesDocument,
    options
  );
}
export function useGetAllEpisodesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllEpisodesQuery, GetAllEpisodesQueryVariables>(
    GetAllEpisodesDocument,
    options
  );
}
export type GetAllEpisodesQueryHookResult = ReturnType<typeof useGetAllEpisodesQuery>;
export type GetAllEpisodesLazyQueryHookResult = ReturnType<typeof useGetAllEpisodesLazyQuery>;
export type GetAllEpisodesSuspenseQueryHookResult = ReturnType<
  typeof useGetAllEpisodesSuspenseQuery
>;
export type GetAllEpisodesQueryResult = Apollo.QueryResult<
  GetAllEpisodesQuery,
  GetAllEpisodesQueryVariables
>;
export const GetEpisodeByIdDocument = gql`
  query getEpisodeById($id: [ID!]!) {
    episodesByIds(ids: $id) {
      id
      name
      air_date
      characters {
        ...CharacterCardFragment
      }
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;

/**
 * __useGetEpisodeByIdQuery__
 *
 * To run a query within a React component, call `useGetEpisodeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodeByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(
    GetEpisodeByIdDocument,
    options
  );
}
export function useGetEpisodeByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(
    GetEpisodeByIdDocument,
    options
  );
}
export function useGetEpisodeByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetEpisodeByIdQuery, GetEpisodeByIdQueryVariables>(
    GetEpisodeByIdDocument,
    options
  );
}
export type GetEpisodeByIdQueryHookResult = ReturnType<typeof useGetEpisodeByIdQuery>;
export type GetEpisodeByIdLazyQueryHookResult = ReturnType<typeof useGetEpisodeByIdLazyQuery>;
export type GetEpisodeByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetEpisodeByIdSuspenseQuery
>;
export type GetEpisodeByIdQueryResult = Apollo.QueryResult<
  GetEpisodeByIdQuery,
  GetEpisodeByIdQueryVariables
>;
export const GetFilterEpisodesDocument = gql`
  query getFilterEpisodes($name: String, $episode: String) {
    episodes(filter: { name: $name, episode: $episode }) {
      results {
        ...EpisodeCard
      }
    }
  }
  ${EpisodeCardFragmentDoc}
`;

/**
 * __useGetFilterEpisodesQuery__
 *
 * To run a query within a React component, call `useGetFilterEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterEpisodesQuery({
 *   variables: {
 *      name: // value for 'name'
 *      episode: // value for 'episode'
 *   },
 * });
 */
export function useGetFilterEpisodesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFilterEpisodesQuery, GetFilterEpisodesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilterEpisodesQuery, GetFilterEpisodesQueryVariables>(
    GetFilterEpisodesDocument,
    options
  );
}
export function useGetFilterEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFilterEpisodesQuery, GetFilterEpisodesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilterEpisodesQuery, GetFilterEpisodesQueryVariables>(
    GetFilterEpisodesDocument,
    options
  );
}
export function useGetFilterEpisodesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFilterEpisodesQuery,
    GetFilterEpisodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetFilterEpisodesQuery, GetFilterEpisodesQueryVariables>(
    GetFilterEpisodesDocument,
    options
  );
}
export type GetFilterEpisodesQueryHookResult = ReturnType<typeof useGetFilterEpisodesQuery>;
export type GetFilterEpisodesLazyQueryHookResult = ReturnType<typeof useGetFilterEpisodesLazyQuery>;
export type GetFilterEpisodesSuspenseQueryHookResult = ReturnType<
  typeof useGetFilterEpisodesSuspenseQuery
>;
export type GetFilterEpisodesQueryResult = Apollo.QueryResult<
  GetFilterEpisodesQuery,
  GetFilterEpisodesQueryVariables
>;
export const GetAllLocationsDocument = gql`
  query getAllLocations {
    locations {
      results {
        ...LocationCard
      }
    }
  }
  ${LocationCardFragmentDoc}
`;

/**
 * __useGetAllLocationsQuery__
 *
 * To run a query within a React component, call `useGetAllLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllLocationsQuery, GetAllLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllLocationsQuery, GetAllLocationsQueryVariables>(
    GetAllLocationsDocument,
    options
  );
}
export function useGetAllLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllLocationsQuery, GetAllLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllLocationsQuery, GetAllLocationsQueryVariables>(
    GetAllLocationsDocument,
    options
  );
}
export function useGetAllLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllLocationsQuery, GetAllLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllLocationsQuery, GetAllLocationsQueryVariables>(
    GetAllLocationsDocument,
    options
  );
}
export type GetAllLocationsQueryHookResult = ReturnType<typeof useGetAllLocationsQuery>;
export type GetAllLocationsLazyQueryHookResult = ReturnType<typeof useGetAllLocationsLazyQuery>;
export type GetAllLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllLocationsSuspenseQuery
>;
export type GetAllLocationsQueryResult = Apollo.QueryResult<
  GetAllLocationsQuery,
  GetAllLocationsQueryVariables
>;
export const GetFilterLocationsDocument = gql`
  query getFilterLocations($name: String, $dimension: String, $type: String) {
    locations(filter: { name: $name, dimension: $dimension, type: $type }) {
      results {
        ...LocationCard
      }
    }
  }
  ${LocationCardFragmentDoc}
`;

/**
 * __useGetFilterLocationsQuery__
 *
 * To run a query within a React component, call `useGetFilterLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilterLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilterLocationsQuery({
 *   variables: {
 *      name: // value for 'name'
 *      dimension: // value for 'dimension'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetFilterLocationsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFilterLocationsQuery, GetFilterLocationsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilterLocationsQuery, GetFilterLocationsQueryVariables>(
    GetFilterLocationsDocument,
    options
  );
}

export function useGetFilterLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilterLocationsQuery, GetFilterLocationsQueryVariables>(
    GetFilterLocationsDocument,
    options
  );
}

export function useGetFilterLocationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetFilterLocationsQuery,
    GetFilterLocationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetFilterLocationsQuery, GetFilterLocationsQueryVariables>(
    GetFilterLocationsDocument,
    options
  );
}

export type GetFilterLocationsQueryHookResult = ReturnType<typeof useGetFilterLocationsQuery>;
export type GetFilterLocationsLazyQueryHookResult = ReturnType<
  typeof useGetFilterLocationsLazyQuery
>;
export type GetFilterLocationsSuspenseQueryHookResult = ReturnType<
  typeof useGetFilterLocationsSuspenseQuery
>;
export type GetFilterLocationsQueryResult = Apollo.QueryResult<
  GetFilterLocationsQuery,
  GetFilterLocationsQueryVariables
>;
export const GetLocationByIdDocument = gql`
  query getLocationById($ids: [ID!]!) {
    locationsByIds(ids: $ids) {
      name
      dimension
      residents {
        ...CharacterCardFragment
      }
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;

/**
 * __useGetLocationByIdQuery__
 *
 * To run a query within a React component, call `useGetLocationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetLocationByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(
    GetLocationByIdDocument,
    options
  );
}
export function useGetLocationByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(
    GetLocationByIdDocument,
    options
  );
}
export function useGetLocationByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetLocationByIdQuery, GetLocationByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetLocationByIdQuery, GetLocationByIdQueryVariables>(
    GetLocationByIdDocument,
    options
  );
}
export type GetLocationByIdQueryHookResult = ReturnType<typeof useGetLocationByIdQuery>;
export type GetLocationByIdLazyQueryHookResult = ReturnType<typeof useGetLocationByIdLazyQuery>;
export type GetLocationByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetLocationByIdSuspenseQuery
>;
export type GetLocationByIdQueryResult = Apollo.QueryResult<
  GetLocationByIdQuery,
  GetLocationByIdQueryVariables
>;
