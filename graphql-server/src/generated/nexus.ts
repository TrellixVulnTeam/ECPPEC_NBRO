/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  OrderByDate: { // input type
    election_date: NexusGenEnums['SortOrder']; // SortOrder!
  }
}

export interface NexusGenEnums {
  GroupCategory: "by_election_cause" | "by_election_general" | "constituency" | "contested" | "countyboroughuniv" | "election_month" | "election_year" | "franchise_type"
  LocationType: "borough" | "county"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Query: {};
  aggregate: { // root type
    count?: number | null; // Int
  }
  artefact: { // root type
    artefact_type?: string | null; // String
    description?: string | null; // String
    display_name?: string | null; // String
    filename?: string | null; // String
    id: number; // Int!
  }
  artefact_attributes: { // root type
    artefact_id: number; // Int!
    attribute_name?: string | null; // String
    attribute_value?: string | null; // String
    id: number; // Int!
  }
  candidate: { // root type
    born?: number | null; // Int
    candidate_id: number; // Int!
    candidate_name?: string | null; // String
    died?: number | null; // Int
    short_name?: string | null; // String
    suffix?: string | null; // String
    title?: string | null; // String
  }
  candidatesElection: { // root type
    candidate_id: number; // Int!
    election_id: string; // String!
    is_winner?: boolean | null; // Boolean
    overturned_by?: string | null; // String
    running_as?: string | null; // String
    ultimate_winner?: boolean | null; // Boolean
  }
  constituencies: { // root type
    constituency?: string | null; // String
    constituency_id: number; // Int!
    has_polling_data?: boolean | null; // Boolean
    lat?: number | null; // Float
    lng?: number | null; // Float
  }
  election: { // root type
    by_election_cause?: string | null; // String
    by_election_general?: string | null; // String
    constituency?: string | null; // String
    contested?: string | null; // String
    countyboroughuniv?: string | null; // String
    election_date?: NexusGenScalars['DateTime'] | null; // DateTime
    election_month?: string | null; // String
    election_year?: string | null; // String
    electorate_size_desc?: string | null; // String
    electorate_size_est?: string | null; // String
    franchise_detail?: string | null; // String
    franchise_type?: string | null; // String
    latitude?: string | null; // String
    longitude?: string | null; // String
    notes?: string | null; // String
    office?: string | null; // String
  }
  electionDates: { // root type
    election_date?: NexusGenScalars['DateTime'] | null; // DateTime
    election_id: string; // String!
  }
  locations: { // root type
    constituency?: string | null; // String
    constituency_id?: string | null; // String
    lat?: number | null; // Float
    lng?: number | null; // Float
  }
  locations_from: { // root type
    constituency_id?: string | null; // String
    constituency_name?: string | null; // String
    distance?: number | null; // Float
    lat?: number | null; // Float
    lng?: number | null; // Float
  }
  occupations_map: { // root type
    level_code?: string | null; // String
    level_name?: string | null; // String
    level_num?: number | null; // Int
  }
  poll_books: { // root type
    Citation?: string | null; // String
    ElectionCode?: string | null; // String
    Holdings?: string | null; // String
    Notes?: string | null; // String
    PollBookCode?: string | null; // String
    PrintMS?: string | null; // String
    Source?: string | null; // String
  }
  stats: { // root type
    constituency?: string | null; // String
    constituency_id?: string | null; // String
    num_contested_all?: number | null; // Int
    num_contested_by?: number | null; // Int
    num_contested_general?: number | null; // Int
    num_elections_all?: string | null; // String
    num_elections_by?: number | null; // Int
    num_elections_general?: number | null; // Int
    num_uncontested_all?: number | null; // Int
    num_uncontested_by?: number | null; // Int
    num_uncontested_general?: number | null; // Int
    percent_contested_all?: number | null; // Float
    percent_contested_by?: number | null; // Float
    percent_contested_general?: number | null; // Float
    percent_uncontested_all?: number | null; // Float
    percent_uncontested_by?: number | null; // Float
    percent_uncontested_general?: number | null; // Float
  }
  vote: { // root type
    line?: number | null; // Int
    page?: number | null; // Int
    poll_date?: string | null; // String
  }
  voter: { // root type
    abode?: string | null; // String
    abode_std?: string | null; // String
    city?: string | null; // String
    class?: string | null; // String
    county?: string | null; // String
    forename?: string | null; // String
    guild?: string | null; // String
    notes?: string | null; // String
    occupation?: string | null; // String
    occupation_ideal?: string | null; // String
    parish?: string | null; // String
    street?: string | null; // String
    suffix?: string | null; // String
    suffix_ideal?: string | null; // String
    surname?: string | null; // String
    title?: string | null; // String
  }
  voters_occupations: { // root type
    occupation?: string | null; // String
    voter_id?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Query: { // field return type
    artefact: NexusGenRootTypes['artefact'][]; // [artefact!]!
    artefact_attributes: NexusGenRootTypes['artefact_attributes'][]; // [artefact_attributes!]!
    candidate: NexusGenRootTypes['candidate'][]; // [candidate!]!
    candidates_elections: NexusGenRootTypes['candidatesElection'][]; // [candidatesElection!]!
    constituencies: NexusGenRootTypes['constituencies'][]; // [constituencies!]!
    election: NexusGenRootTypes['election'][]; // [election!]!
    election_dates: NexusGenRootTypes['electionDates'][]; // [electionDates!]!
    location: NexusGenRootTypes['locations'][]; // [locations!]!
    location_from: NexusGenRootTypes['locations_from'][]; // [locations_from!]!
    occupations_group: NexusGenRootTypes['occupations_map'][]; // [occupations_map!]!
    poll_book: NexusGenRootTypes['poll_books'][]; // [poll_books!]!
    stats: NexusGenRootTypes['stats'][]; // [stats!]!
    vote: NexusGenRootTypes['vote'][]; // [vote!]!
    voter: NexusGenRootTypes['voter'][]; // [voter!]!
    voters_occupations: NexusGenRootTypes['voters_occupations'][]; // [voters_occupations!]!
  }
  aggregate: { // field return type
    count: number | null; // Int
  }
  artefact: { // field return type
    artefact_attributes: Array<NexusGenRootTypes['artefact_attributes'] | null> | null; // [artefact_attributes]
    artefact_type: string | null; // String
    description: string | null; // String
    display_name: string | null; // String
    filename: string | null; // String
    id: number; // Int!
  }
  artefact_attributes: { // field return type
    artefact: Array<NexusGenRootTypes['artefact'] | null> | null; // [artefact]
    artefact_id: number; // Int!
    attribute_name: string | null; // String
    attribute_value: string | null; // String
    id: number; // Int!
  }
  candidate: { // field return type
    born: number | null; // Int
    candidate_id: number; // Int!
    candidate_name: string | null; // String
    candidates_elections: Array<NexusGenRootTypes['candidatesElection'] | null> | null; // [candidatesElection]
    died: number | null; // Int
    short_name: string | null; // String
    suffix: string | null; // String
    title: string | null; // String
    votes: Array<NexusGenRootTypes['vote'] | null> | null; // [vote]
  }
  candidatesElection: { // field return type
    candidate: Array<NexusGenRootTypes['candidate'] | null> | null; // [candidate]
    candidate_id: number; // Int!
    election: Array<NexusGenRootTypes['election'] | null> | null; // [election]
    election_id: string; // String!
    is_winner: boolean | null; // Boolean
    overturned_by: string | null; // String
    running_as: string | null; // String
    ultimate_winner: boolean | null; // Boolean
  }
  constituencies: { // field return type
    constituency: string | null; // String
    constituency_id: number; // Int!
    elections: Array<NexusGenRootTypes['election'] | null> | null; // [election]
    electionsCount: number | null; // Int
    has_polling_data: boolean | null; // Boolean
    lat: number | null; // Float
    lng: number | null; // Float
    stats: Array<NexusGenRootTypes['stats'] | null> | null; // [stats]
  }
  election: { // field return type
    by_election_cause: string | null; // String
    by_election_general: string | null; // String
    candidates_elections: Array<NexusGenRootTypes['candidatesElection'] | null> | null; // [candidatesElection]
    constituency: string | null; // String
    contested: string | null; // String
    countyboroughuniv: string | null; // String
    election_date: NexusGenScalars['DateTime'] | null; // DateTime
    election_month: string | null; // String
    election_year: string | null; // String
    electorate_size_desc: string | null; // String
    electorate_size_est: string | null; // String
    franchise_detail: string | null; // String
    franchise_type: string | null; // String
    latitude: string | null; // String
    longitude: string | null; // String
    notes: string | null; // String
    office: string | null; // String
    poll_books: Array<NexusGenRootTypes['poll_books'] | null> | null; // [poll_books]
  }
  electionDates: { // field return type
    election: Array<NexusGenRootTypes['election'] | null> | null; // [election]
    election_date: NexusGenScalars['DateTime'] | null; // DateTime
    election_id: string; // String!
  }
  locations: { // field return type
    constituencies: Array<NexusGenRootTypes['constituencies'] | null> | null; // [constituencies]
    constituency: string | null; // String
    constituency_id: string | null; // String
    lat: number | null; // Float
    lng: number | null; // Float
  }
  locations_from: { // field return type
    constituency_id: string | null; // String
    constituency_name: string | null; // String
    distance: number | null; // Float
    lat: number | null; // Float
    lng: number | null; // Float
  }
  occupations_map: { // field return type
    level_code: string | null; // String
    level_name: string | null; // String
    level_num: number | null; // Int
    voters: Array<NexusGenRootTypes['voter'] | null> | null; // [voter]
  }
  poll_books: { // field return type
    Citation: string | null; // String
    ElectionCode: string | null; // String
    Holdings: string | null; // String
    Notes: string | null; // String
    PollBookCode: string | null; // String
    PrintMS: string | null; // String
    Source: string | null; // String
  }
  stats: { // field return type
    constituencies: Array<NexusGenRootTypes['constituencies'] | null> | null; // [constituencies]
    constituency: string | null; // String
    constituency_id: string | null; // String
    num_contested_all: number | null; // Int
    num_contested_by: number | null; // Int
    num_contested_general: number | null; // Int
    num_elections_all: string | null; // String
    num_elections_by: number | null; // Int
    num_elections_general: number | null; // Int
    num_uncontested_all: number | null; // Int
    num_uncontested_by: number | null; // Int
    num_uncontested_general: number | null; // Int
    percent_contested_all: number | null; // Float
    percent_contested_by: number | null; // Float
    percent_contested_general: number | null; // Float
    percent_uncontested_all: number | null; // Float
    percent_uncontested_by: number | null; // Float
    percent_uncontested_general: number | null; // Float
  }
  vote: { // field return type
    candidate: Array<NexusGenRootTypes['candidate'] | null> | null; // [candidate]
    constituencies: Array<NexusGenRootTypes['constituencies'] | null> | null; // [constituencies]
    elections: Array<NexusGenRootTypes['election'] | null> | null; // [election]
    line: number | null; // Int
    page: number | null; // Int
    poll_books: Array<NexusGenRootTypes['poll_books'] | null> | null; // [poll_books]
    poll_date: string | null; // String
    voter: Array<NexusGenRootTypes['voter'] | null> | null; // [voter]
  }
  voter: { // field return type
    abode: string | null; // String
    abode_std: string | null; // String
    city: string | null; // String
    class: string | null; // String
    county: string | null; // String
    forename: string | null; // String
    guild: string | null; // String
    notes: string | null; // String
    occupation: string | null; // String
    occupation_ideal: string | null; // String
    occupations_level1: Array<NexusGenRootTypes['occupations_map'] | null> | null; // [occupations_map]
    occupations_level2: Array<NexusGenRootTypes['occupations_map'] | null> | null; // [occupations_map]
    parish: string | null; // String
    street: string | null; // String
    suffix: string | null; // String
    suffix_ideal: string | null; // String
    surname: string | null; // String
    title: string | null; // String
    vote: Array<NexusGenRootTypes['vote'] | null> | null; // [vote]
  }
  voters_occupations: { // field return type
    level1: Array<NexusGenRootTypes['occupations_map'] | null> | null; // [occupations_map]
    level2: Array<NexusGenRootTypes['occupations_map'] | null> | null; // [occupations_map]
    occupation: string | null; // String
    voter_id: string | null; // String
    voters: Array<NexusGenRootTypes['voter'] | null> | null; // [voter]
  }
}

export interface NexusGenFieldTypeNames {
  Query: { // field return type name
    artefact: 'artefact'
    artefact_attributes: 'artefact_attributes'
    candidate: 'candidate'
    candidates_elections: 'candidatesElection'
    constituencies: 'constituencies'
    election: 'election'
    election_dates: 'electionDates'
    location: 'locations'
    location_from: 'locations_from'
    occupations_group: 'occupations_map'
    poll_book: 'poll_books'
    stats: 'stats'
    vote: 'vote'
    voter: 'voter'
    voters_occupations: 'voters_occupations'
  }
  aggregate: { // field return type name
    count: 'Int'
  }
  artefact: { // field return type name
    artefact_attributes: 'artefact_attributes'
    artefact_type: 'String'
    description: 'String'
    display_name: 'String'
    filename: 'String'
    id: 'Int'
  }
  artefact_attributes: { // field return type name
    artefact: 'artefact'
    artefact_id: 'Int'
    attribute_name: 'String'
    attribute_value: 'String'
    id: 'Int'
  }
  candidate: { // field return type name
    born: 'Int'
    candidate_id: 'Int'
    candidate_name: 'String'
    candidates_elections: 'candidatesElection'
    died: 'Int'
    short_name: 'String'
    suffix: 'String'
    title: 'String'
    votes: 'vote'
  }
  candidatesElection: { // field return type name
    candidate: 'candidate'
    candidate_id: 'Int'
    election: 'election'
    election_id: 'String'
    is_winner: 'Boolean'
    overturned_by: 'String'
    running_as: 'String'
    ultimate_winner: 'Boolean'
  }
  constituencies: { // field return type name
    constituency: 'String'
    constituency_id: 'Int'
    elections: 'election'
    electionsCount: 'Int'
    has_polling_data: 'Boolean'
    lat: 'Float'
    lng: 'Float'
    stats: 'stats'
  }
  election: { // field return type name
    by_election_cause: 'String'
    by_election_general: 'String'
    candidates_elections: 'candidatesElection'
    constituency: 'String'
    contested: 'String'
    countyboroughuniv: 'String'
    election_date: 'DateTime'
    election_month: 'String'
    election_year: 'String'
    electorate_size_desc: 'String'
    electorate_size_est: 'String'
    franchise_detail: 'String'
    franchise_type: 'String'
    latitude: 'String'
    longitude: 'String'
    notes: 'String'
    office: 'String'
    poll_books: 'poll_books'
  }
  electionDates: { // field return type name
    election: 'election'
    election_date: 'DateTime'
    election_id: 'String'
  }
  locations: { // field return type name
    constituencies: 'constituencies'
    constituency: 'String'
    constituency_id: 'String'
    lat: 'Float'
    lng: 'Float'
  }
  locations_from: { // field return type name
    constituency_id: 'String'
    constituency_name: 'String'
    distance: 'Float'
    lat: 'Float'
    lng: 'Float'
  }
  occupations_map: { // field return type name
    level_code: 'String'
    level_name: 'String'
    level_num: 'Int'
    voters: 'voter'
  }
  poll_books: { // field return type name
    Citation: 'String'
    ElectionCode: 'String'
    Holdings: 'String'
    Notes: 'String'
    PollBookCode: 'String'
    PrintMS: 'String'
    Source: 'String'
  }
  stats: { // field return type name
    constituencies: 'constituencies'
    constituency: 'String'
    constituency_id: 'String'
    num_contested_all: 'Int'
    num_contested_by: 'Int'
    num_contested_general: 'Int'
    num_elections_all: 'String'
    num_elections_by: 'Int'
    num_elections_general: 'Int'
    num_uncontested_all: 'Int'
    num_uncontested_by: 'Int'
    num_uncontested_general: 'Int'
    percent_contested_all: 'Float'
    percent_contested_by: 'Float'
    percent_contested_general: 'Float'
    percent_uncontested_all: 'Float'
    percent_uncontested_by: 'Float'
    percent_uncontested_general: 'Float'
  }
  vote: { // field return type name
    candidate: 'candidate'
    constituencies: 'constituencies'
    elections: 'election'
    line: 'Int'
    page: 'Int'
    poll_books: 'poll_books'
    poll_date: 'String'
    voter: 'voter'
  }
  voter: { // field return type name
    abode: 'String'
    abode_std: 'String'
    city: 'String'
    class: 'String'
    county: 'String'
    forename: 'String'
    guild: 'String'
    notes: 'String'
    occupation: 'String'
    occupation_ideal: 'String'
    occupations_level1: 'occupations_map'
    occupations_level2: 'occupations_map'
    parish: 'String'
    street: 'String'
    suffix: 'String'
    suffix_ideal: 'String'
    surname: 'String'
    title: 'String'
    vote: 'vote'
  }
  voters_occupations: { // field return type name
    level1: 'occupations_map'
    level2: 'occupations_map'
    occupation: 'String'
    voter_id: 'String'
    voters: 'voter'
  }
}

export interface NexusGenArgTypes {
  Query: {
    artefact: { // args
      artefact_type?: Array<string | null> | null; // [String]
      description?: string | null; // String
      display_name?: string | null; // String
      filename?: string | null; // String
    }
    artefact_attributes: { // args
      artefact_id?: number | null; // Int
      attribute_name?: string | null; // String
    }
    candidate: { // args
      born?: number | null; // Int
      born_gte?: number | null; // Int
      born_lte?: number | null; // Int
      candidate_id?: number | null; // Int
      candidate_name?: string | null; // String
      died?: number | null; // Int
      died_gte?: number | null; // Int
      died_lte?: number | null; // Int
      short_name?: string | null; // String
      suffix?: string | null; // String
      title?: Array<string | null> | null; // [String]
    }
    candidates_elections: { // args
      candidate_id?: number | null; // Int
      election_id?: string | null; // String
      is_winner?: number | null; // Int
      overturned_by?: string | null; // String
      running_as?: string | null; // String
      ultimate_winner?: number | null; // Int
    }
    constituencies: { // args
      constituency?: string | null; // String
      constituency_id?: number | null; // Int
      has_polling_data?: boolean | null; // Boolean
    }
    election: { // args
      by_election_cause?: string | null; // String
      by_election_general?: string | null; // String
      constituency?: string | null; // String
      constituency_id?: number | null; // Int
      contested?: string | null; // String
      countyboroughuniv?: string | null; // String
      election_month?: string | null; // String
      election_year_gte: number | null; // Int
      election_year_lte: number | null; // Int
      electorate_size_est_gte?: number | null; // Int
      electorate_size_est_lte?: number | null; // Int
      franchise_type?: Array<string | null> | null; // [String]
      office?: string | null; // String
    }
    election_dates: { // args
      election_year?: number | null; // Int
      election_year_gte?: number | null; // Int
      election_year_lte: number | null; // Int
      orderBy?: NexusGenInputs['OrderByDate'] | null; // OrderByDate
    }
    location: { // args
      constituency?: string | null; // String
    }
    location_from: { // args
      distance: number | null; // Float
      lat?: number | null; // Float
      lng?: number | null; // Float
    }
    occupations_group: { // args
      occupation?: string | null; // String
    }
    stats: { // args
      constituency?: string | null; // String
      num_contested_all_gte?: number | null; // Int
      num_contested_all_lte?: number | null; // Int
      num_contested_by_gte?: number | null; // Int
      num_contested_by_lte?: number | null; // Int
      num_contested_general_gte?: number | null; // Int
      num_contested_general_lte?: number | null; // Int
      num_elections_all_gte?: number | null; // Int
      num_elections_all_lte?: number | null; // Int
      num_elections_by_gte?: number | null; // Int
      num_elections_by_lte?: number | null; // Int
      num_elections_general_gte?: number | null; // Int
      num_elections_general_lte?: number | null; // Int
      num_uncontested_all_gte?: number | null; // Int
      num_uncontested_all_lte?: number | null; // Int
      num_uncontested_by_gte?: number | null; // Int
      num_uncontested_by_lte?: number | null; // Int
      num_uncontested_general_gte?: number | null; // Int
      num_uncontested_general_lte?: number | null; // Int
      percent_contested_all_gte?: number | null; // Float
      percent_contested_all_lte?: number | null; // Float
      percent_contested_by_gte?: number | null; // Float
      percent_contested_by_lte?: number | null; // Float
      percent_contested_general_gte?: number | null; // Float
      percent_contested_general_lte?: number | null; // Float
      percent_uncontested_all_gte?: number | null; // Float
      percent_uncontested_all_lte?: number | null; // Float
      percent_uncontested_by_gte?: number | null; // Float
      percent_uncontested_by_lte?: number | null; // Float
      percent_uncontested_general_gte?: number | null; // Float
      percent_uncontested_general_lte?: number | null; // Float
    }
    vote: { // args
      line?: number | null; // Int
      page?: number | null; // Int
    }
    voter: { // args
      forename?: string | null; // String
      guild?: string | null; // String
      occupation?: string | null; // String
      surname?: string | null; // String
    }
    voters_occupations: { // args
      occupation?: string | null; // String
    }
  }
  candidate: {
    candidates_elections: { // args
      is_winner?: number | null; // Int
      ultimate_winner?: number | null; // Int
    }
  }
  vote: {
    voter: { // args
      forename?: string | null; // String
      guild?: string | null; // String
      occupation?: string | null; // String
      surname?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}