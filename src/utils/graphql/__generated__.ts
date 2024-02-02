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

export type GetCharactersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCharactersQuery = {
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

export const CharacterCardFragmentFragmentDoc = gql`
  fragment CharacterCardFragment on Character {
    id
    image
    name
    species
  }
`;
export const GetCharactersDocument = gql`
  query getCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...CharacterCardFragment
      }
    }
  }
  ${CharacterCardFragmentFragmentDoc}
`;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}

export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}

export function useGetCharactersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetCharactersQuery, GetCharactersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options
  );
}

export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersSuspenseQueryHookResult = ReturnType<typeof useGetCharactersSuspenseQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>;
