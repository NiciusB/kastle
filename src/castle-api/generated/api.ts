/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Datetime: any;
  Json: any;
  Null: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AppNotification = {
  __typename?: 'AppNotification';
  appNotificationId: Scalars['ID'];
  type: Scalars['String'];
  body: Scalars['Json'];
  status: AppNotificationStatus;
  chatMessageId?: Maybe<Scalars['ID']>;
  chatChannelId?: Maybe<Scalars['ID']>;
  gameId?: Maybe<Scalars['ID']>;
  authorUserId?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['ID']>;
  createdTime?: Maybe<Scalars['Datetime']>;
  updatedTime?: Maybe<Scalars['Datetime']>;
};

export enum AppNotificationStatus {
  Unseen = 'unseen',
  Seen = 'seen',
  Acted = 'acted'
}

export type BlogPost = {
  __typename?: 'BlogPost';
  blogPostId: Scalars['ID'];
  creatorUserId: Scalars['ID'];
  creator: User;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editCount: Scalars['Int'];
  publishedTime?: Maybe<Scalars['Datetime']>;
  createdTime: Scalars['Datetime'];
  updatedTime: Scalars['Datetime'];
};

export type BlogPostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum BlogPostOrderBy {
  Published = 'published',
  Created = 'created'
}

export type Card = {
  __typename?: 'Card';
  creatorUserId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  cardId: Scalars['ID'];
  deckId: Scalars['ID'];
  sceneId?: Maybe<Scalars['ID']>;
  sceneData: Scalars['Json'];
  sceneBackups: Array<Maybe<SceneBackup>>;
  scene?: Maybe<Scene>;
  title: Scalars['String'];
  blocks: Array<Maybe<CardBlock>>;
  backgroundImage?: Maybe<HostedFile>;
  updatedTime?: Maybe<Scalars['Datetime']>;
  isSaved?: Maybe<Scalars['Boolean']>;
  lastModified?: Maybe<Scalars['Datetime']>;
  /** admin */
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type CardAndDeck = {
  __typename?: 'CardAndDeck';
  card: Card;
  deck: Deck;
};

export type CardBlock = {
  __typename?: 'CardBlock';
  id: Scalars['ID'];
  cardBlockId: Scalars['ID'];
  type: Scalars['String'];
  destinationCardId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  cardBlockUpdateId?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['Json']>;
};

export type CardBlockInput = {
  type: Scalars['String'];
  destinationCardId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  createDestinationCard?: Maybe<Scalars['Boolean']>;
  cardBlockUpdateId?: Maybe<Scalars['ID']>;
  metadata?: Maybe<Scalars['Json']>;
};

export type CardInput = {
  cardId?: Maybe<Scalars['ID']>;
  deckId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  blocks: Array<Maybe<CardBlockInput>>;
  backgroundImageFileId?: Maybe<Scalars['ID']>;
  makeInitialCard?: Maybe<Scalars['Boolean']>;
  sceneId?: Maybe<Scalars['ID']>;
  sceneData?: Maybe<Scalars['Json']>;
};

export type ChatChannel = {
  __typename?: 'ChatChannel';
  channelId: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  hasUnreadMessages: Scalars['Boolean'];
  unreadNotificationCount: Scalars['Int'];
  gameId?: Maybe<Scalars['ID']>;
  createdTime?: Maybe<Scalars['Datetime']>;
  updatedTime?: Maybe<Scalars['Datetime']>;
  subscribedUsers?: Maybe<Array<Maybe<User>>>;
  /** only available in dms */
  otherUserId?: Maybe<Scalars['ID']>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chatMessageId: Scalars['ID'];
  channelId: Scalars['ID'];
  fromUserId: Scalars['ID'];
  body: Scalars['Json'];
  isEdited: Scalars['Boolean'];
  editCount: Scalars['Int'];
  reactions: Scalars['Json'];
  triggersUnread: Scalars['Boolean'];
  createdTime?: Maybe<Scalars['Datetime']>;
  updatedTime?: Maybe<Scalars['Datetime']>;
};


export type Deck = {
  __typename?: 'Deck';
  creatorUserId: Scalars['ID'];
  creator: User;
  id: Scalars['ID'];
  deckId: Scalars['ID'];
  title: Scalars['String'];
  cards: Array<Maybe<Card>>;
  initialCard: Card;
  currentCard?: Maybe<Card>;
  isVisible: Scalars['Boolean'];
  variables: Array<Maybe<Scalars['Json']>>;
  lastModified?: Maybe<Scalars['Datetime']>;
  /** admin */
  curationPolicies?: Maybe<Array<Maybe<DeckCurationPolicy>>>;
  isDeleted?: Maybe<Scalars['Boolean']>;
};

export type DeckCurationPolicy = {
  __typename?: 'DeckCurationPolicy';
  deckCurationPolicyId: Scalars['ID'];
  type: DeckCurationPolicyType;
  platform: DeckCurationPolicyPlatform;
  value?: Maybe<Scalars['Int']>;
};

export enum DeckCurationPolicyPlatform {
  All = 'all',
  Mobile = 'mobile',
  Desktop = 'desktop'
}

export enum DeckCurationPolicyType {
  Pin = 'pin',
  Blacklist = 'blacklist',
  BlacklistTrendingOnly = 'blacklistTrendingOnly'
}

export type DeckInput = {
  deckId?: Maybe<Scalars['ID']>;
  initialCardId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  variables?: Maybe<Array<Scalars['Json']>>;
};

export type DesktopNotificaionPreference = {
  __typename?: 'DesktopNotificaionPreference';
  type: Scalars['String'];
  description: Scalars['String'];
  frequency: DesktopNotificationFrequency;
  supportedFrequencies: Array<Maybe<DesktopNotificationFrequency>>;
};

export enum DesktopNotificationFrequency {
  Every = 'every',
  Never = 'never'
}

export type EmailNotificaionPreference = {
  __typename?: 'EmailNotificaionPreference';
  type: Scalars['String'];
  description: Scalars['String'];
  frequency: EmailNotificationFrequency;
  supportedFrequencies: Array<Maybe<EmailNotificationFrequency>>;
};

export enum EmailNotificationFrequency {
  Every = 'every',
  Daily = 'daily',
  Never = 'never'
}

export type Game = {
  __typename?: 'Game';
  url: Scalars['String'];
  sourceUrl: Scalars['String'];
  /** Won't have these field for unregistered games */
  id?: Maybe<Scalars['ID']>;
  gameId?: Maybe<Scalars['ID']>;
  castleUrlPath?: Maybe<Scalars['String']>;
  /** slug is deprecated */
  slug?: Maybe<Scalars['String']>;
  chatChannelId?: Maybe<Scalars['ID']>;
  isCastleHosted?: Maybe<Scalars['Boolean']>;
  /** user and owner are aliases */
  userId?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  ownerId?: Maybe<Scalars['ID']>;
  owner?: Maybe<User>;
  /** These are aliases */
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['Json']>;
  main?: Maybe<Scalars['String']>;
  entryPoint?: Maybe<Scalars['String']>;
  serverEntryPoint?: Maybe<Scalars['String']>;
  storageId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  coverImageFileId?: Maybe<Scalars['ID']>;
  coverImage?: Maybe<HostedFile>;
  unlisted?: Maybe<Scalars['Boolean']>;
  draft?: Maybe<Scalars['Boolean']>;
  createdTime?: Maybe<Scalars['Datetime']>;
  updatedTime?: Maybe<Scalars['Datetime']>;
  playCount?: Maybe<Scalars['Int']>;
  sessionId?: Maybe<Scalars['String']>;
  isFavorite?: Maybe<Scalars['Boolean']>;
  favoriteCount?: Maybe<Scalars['Int']>;
  searchScore?: Maybe<Scalars['String']>;
  hostedFiles?: Maybe<Scalars['Json']>;
  /** internal */
  nameSlug?: Maybe<Scalars['String']>;
  /** admin */
  curationPolicies?: Maybe<Array<Maybe<GameCurationPolicy>>>;
  postsSourced?: Maybe<Array<Maybe<Post>>>;
};


export type GamePostsSourcedArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterPostId?: Maybe<Scalars['ID']>;
};

export type GameCurationPolicy = {
  __typename?: 'GameCurationPolicy';
  gameCurationPolicyId: Scalars['ID'];
  type: GameCurationPolicyType;
  platform: GameCurationPolicyPlatform;
  value?: Maybe<Scalars['Int']>;
};

export enum GameCurationPolicyPlatform {
  All = 'all',
  Mobile = 'mobile',
  Desktop = 'desktop'
}

export enum GameCurationPolicyType {
  Pin = 'pin',
  Blacklist = 'blacklist',
  BlacklistTrendingOnly = 'blacklistTrendingOnly'
}

export type GameFile = {
  path: Scalars['String'];
  /**
   * One of file or hash is required
   * TODO: support diffs
   */
  file?: Maybe<Scalars['Upload']>;
  hash?: Maybe<Scalars['String']>;
};

export type GameGlobalStorage = {
  __typename?: 'GameGlobalStorage';
  storageId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type GameUserStorage = {
  __typename?: 'GameUserStorage';
  storageId: Scalars['String'];
  userId: Scalars['ID'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type HostedFile = {
  __typename?: 'HostedFile';
  fileId?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  /** This should be non-nullable, but the hardcoded playlist breaks that right now */
  url?: Maybe<Scalars['String']>;
  smallUrl?: Maybe<Scalars['String']>;
  overlayUrl?: Maybe<Scalars['String']>;
  privateCardUrl?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  /** Deprecated */
  imgixUrl?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
  uploadedTime?: Maybe<Scalars['Datetime']>;
  originUrl?: Maybe<Scalars['String']>;
};

/** deprecated */
export type JoinableMultiplayerSession = {
  __typename?: 'JoinableMultiplayerSession';
  sessionId?: Maybe<Scalars['String']>;
  game?: Maybe<Game>;
};


export type MultiplayerRegion = {
  __typename?: 'MultiplayerRegion';
  name: Scalars['String'];
  pingAddress: Scalars['String'];
};

export type MultiplayerSession = {
  __typename?: 'MultiplayerSession';
  address: Scalars['String'];
  agentAddress: Scalars['String'];
  sessionId: Scalars['String'];
  isNewSession: Scalars['Boolean'];
  sessionToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  sendChatMessage?: Maybe<Scalars['Null']>;
  editChatMessage?: Maybe<Scalars['Null']>;
  toggleChatMessageReaction: ChatMessage;
  markChatMessageRead: ChatChannel;
  createChatChannel: ChatChannel;
  joinChatChannel: ChatChannel;
  leaveChatChannel: ChatChannel;
  createGameChatChannel: ChatChannel;
  createDMChatChannel: ChatChannel;
  uploadFile?: Maybe<HostedFile>;
  uploadBase64?: Maybe<HostedFile>;
  uploadScreenCapture?: Maybe<Array<Maybe<ScreenCaptureResult>>>;
  publishGame?: Maybe<Game>;
  updateGame?: Maybe<Game>;
  deleteGame?: Maybe<Scalars['Null']>;
  /** deprecated */
  registerGame?: Maybe<Game>;
  /** admin */
  adminAddGameCurationPolicy?: Maybe<Scalars['Null']>;
  adminRemoveGameCurationPolicy?: Maybe<Scalars['Null']>;
  /** entryPoint and mediaUrl are deprecated */
  joinMultiplayerSession?: Maybe<MultiplayerSession>;
  updatePings?: Maybe<Scalars['Null']>;
  setAppNotificationsStatus?: Maybe<Scalars['Null']>;
  setNotificationPreferencesV2: Scalars['Json'];
  /** admin */
  sendTestAppNotificationAdmin?: Maybe<AppNotification>;
  /** deprecated */
  updateEmailNotificationPreference?: Maybe<NotificationPreferences>;
  updateDesktopNotificationPreference?: Maybe<NotificationPreferences>;
  uploadGame?: Maybe<Scalars['Json']>;
  /** deprecated */
  publishHostedGame?: Maybe<Scalars['Json']>;
  createAnonymousUser?: Maybe<User>;
  login?: Maybe<User>;
  signup?: Maybe<User>;
  sendResetPasswordEmail?: Maybe<Scalars['Null']>;
  resetPassword?: Maybe<User>;
  confirmEmail?: Maybe<Scalars['Null']>;
  logout?: Maybe<Scalars['Null']>;
  toggleFavoriteGame?: Maybe<Game>;
  updateUser?: Maybe<User>;
  /** admin */
  markTestUser?: Maybe<User>;
  setPasswordAdmin?: Maybe<User>;
  deleteUser?: Maybe<Scalars['Null']>;
  /** status is 'play' or 'make' */
  recordUserStatus?: Maybe<UserStatus>;
  setGameGlobalStorage?: Maybe<Scalars['Boolean']>;
  setGameUserStorage?: Maybe<Scalars['Boolean']>;
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['Null']>;
  createBlogPost: BlogPost;
  updateBlogPost: BlogPost;
  deleteBlogPost?: Maybe<Scalars['Null']>;
  publishBlogPost: BlogPost;
  unpublishBlogPost: BlogPost;
  createDeck: Deck;
  updateDeck: Deck;
  addCard: Array<Maybe<Card>>;
  duplicateCard: Card;
  updateCard: Array<Maybe<Card>>;
  deleteCard?: Maybe<Scalars['Null']>;
  deleteDeck?: Maybe<Scalars['Null']>;
  createScene: Scene;
  updateScene: Scene;
  deleteScene?: Maybe<Scalars['Null']>;
  recordDeckPlay?: Maybe<Scalars['Null']>;
  updateCardAndDeckV2: CardAndDeck;
  updateDeckV2: Deck;
  adminAddDeckCurationPolicy?: Maybe<Scalars['Null']>;
  adminRemoveDeckCurationPolicy?: Maybe<Scalars['Null']>;
  adminRestoreCard: Card;
  updatePushToken?: Maybe<Scalars['Null']>;
};


export type MutationSendChatMessageArgs = {
  message: Scalars['String'];
  channelId: Scalars['ID'];
  tempChatMessageId?: Maybe<Scalars['ID']>;
};


export type MutationEditChatMessageArgs = {
  message: Scalars['String'];
  chatMessageId: Scalars['ID'];
  tempChatMessageId?: Maybe<Scalars['ID']>;
};


export type MutationToggleChatMessageReactionArgs = {
  chatMessageId: Scalars['ID'];
  emoji?: Maybe<Scalars['String']>;
};


export type MutationMarkChatMessageReadArgs = {
  chatMessageId: Scalars['ID'];
};


export type MutationCreateChatChannelArgs = {
  name: Scalars['String'];
};


export type MutationJoinChatChannelArgs = {
  channelId: Scalars['ID'];
};


export type MutationLeaveChatChannelArgs = {
  channelId: Scalars['ID'];
};


export type MutationCreateGameChatChannelArgs = {
  gameId: Scalars['ID'];
};


export type MutationCreateDmChatChannelArgs = {
  otherUserId: Scalars['ID'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
  params?: Maybe<UploadFileParams>;
};


export type MutationUploadBase64Args = {
  data: Scalars['String'];
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  params?: Maybe<UploadFileParams>;
};


export type MutationUploadScreenCaptureArgs = {
  file: Scalars['Upload'];
};


export type MutationPublishGameArgs = {
  url: Scalars['String'];
  gameId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateGameArgs = {
  url: Scalars['String'];
};


export type MutationDeleteGameArgs = {
  url: Scalars['String'];
};


export type MutationRegisterGameArgs = {
  url: Scalars['String'];
};


export type MutationAdminAddGameCurationPolicyArgs = {
  gameId: Scalars['ID'];
  type: GameCurationPolicyType;
  platform: GameCurationPolicyPlatform;
  value?: Maybe<Scalars['Int']>;
};


export type MutationAdminRemoveGameCurationPolicyArgs = {
  gameCurationPolicyId: Scalars['ID'];
};


export type MutationJoinMultiplayerSessionArgs = {
  gameId?: Maybe<Scalars['ID']>;
  entryPoint?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  castleFileUrl?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
  isStaging?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdatePingsArgs = {
  pings?: Maybe<Array<Maybe<UserPing>>>;
  timeZone?: Maybe<Scalars['String']>;
};


export type MutationSetAppNotificationsStatusArgs = {
  appNotificationIds: Array<Maybe<Scalars['ID']>>;
  status: AppNotificationStatus;
};


export type MutationSetNotificationPreferencesV2Args = {
  preferences: Scalars['Json'];
};


export type MutationSendTestAppNotificationAdminArgs = {
  userId: Scalars['ID'];
  type: Scalars['String'];
  message: Scalars['String'];
  chatMessageId?: Maybe<Scalars['ID']>;
  chatChannelId?: Maybe<Scalars['ID']>;
  gameId?: Maybe<Scalars['ID']>;
  authorUserId?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateEmailNotificationPreferenceArgs = {
  type: Scalars['String'];
  frequency: EmailNotificationFrequency;
};


export type MutationUpdateDesktopNotificationPreferenceArgs = {
  type: Scalars['String'];
  frequency: DesktopNotificationFrequency;
};


export type MutationUploadGameArgs = {
  gameFiles: Array<Maybe<GameFile>>;
};


export type MutationPublishHostedGameArgs = {
  gameFiles: Array<Maybe<GameFile>>;
};


export type MutationLoginArgs = {
  userId?: Maybe<Scalars['ID']>;
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  user: UserInput;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationSendResetPasswordEmailArgs = {
  userId: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationConfirmEmailArgs = {
  code: Scalars['String'];
};


export type MutationToggleFavoriteGameArgs = {
  gameId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateUserArgs = {
  userId: Scalars['ID'];
  user?: Maybe<UserInput>;
};


export type MutationMarkTestUserArgs = {
  userId: Scalars['ID'];
  isTestUser?: Maybe<Scalars['Boolean']>;
};


export type MutationSetPasswordAdminArgs = {
  userId: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
  email: Scalars['String'];
};


export type MutationRecordUserStatusArgs = {
  status: Scalars['String'];
  isNewSession?: Maybe<Scalars['Boolean']>;
  registeredGameId?: Maybe<Scalars['ID']>;
  unregisteredGame?: Maybe<UserStatusGameInput>;
};


export type MutationSetGameGlobalStorageArgs = {
  storageId: Scalars['String'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type MutationSetGameUserStorageArgs = {
  storageId: Scalars['String'];
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type MutationCreatePostArgs = {
  postInput: PostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID'];
};


export type MutationCreateBlogPostArgs = {
  blogPost: BlogPostInput;
};


export type MutationUpdateBlogPostArgs = {
  blogPostId: Scalars['ID'];
  currentEditCount: Scalars['Int'];
  blogPost: BlogPostInput;
};


export type MutationDeleteBlogPostArgs = {
  blogPostId: Scalars['ID'];
};


export type MutationPublishBlogPostArgs = {
  blogPostId: Scalars['ID'];
};


export type MutationUnpublishBlogPostArgs = {
  blogPostId: Scalars['ID'];
};


export type MutationCreateDeckArgs = {
  deck: DeckInput;
  card: CardInput;
};


export type MutationUpdateDeckArgs = {
  deckId: Scalars['ID'];
  deck: DeckInput;
};


export type MutationAddCardArgs = {
  deckId: Scalars['ID'];
  card: CardInput;
};


export type MutationDuplicateCardArgs = {
  cardId: Scalars['ID'];
};


export type MutationUpdateCardArgs = {
  cardId: Scalars['ID'];
  card: CardInput;
};


export type MutationDeleteCardArgs = {
  cardId: Scalars['ID'];
};


export type MutationDeleteDeckArgs = {
  deckId: Scalars['ID'];
};


export type MutationCreateSceneArgs = {
  data: Scalars['Json'];
  cardId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateSceneArgs = {
  sceneId?: Maybe<Scalars['ID']>;
  cardId?: Maybe<Scalars['ID']>;
  data: Scalars['Json'];
};


export type MutationDeleteSceneArgs = {
  sceneId?: Maybe<Scalars['ID']>;
  cardId?: Maybe<Scalars['ID']>;
};


export type MutationRecordDeckPlayArgs = {
  deckId: Scalars['ID'];
};


export type MutationUpdateCardAndDeckV2Args = {
  card: CardInput;
  deck: DeckInput;
  isAutosave?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateDeckV2Args = {
  deck: DeckInput;
};


export type MutationAdminAddDeckCurationPolicyArgs = {
  deckId: Scalars['ID'];
  type: DeckCurationPolicyType;
  platform: DeckCurationPolicyPlatform;
  value?: Maybe<Scalars['Int']>;
};


export type MutationAdminRemoveDeckCurationPolicyArgs = {
  deckCurationPolicyId: Scalars['ID'];
};


export type MutationAdminRestoreCardArgs = {
  cardId: Scalars['ID'];
  sceneBackupVersion: Scalars['Int'];
};


export type MutationUpdatePushTokenArgs = {
  token: Scalars['String'];
  platform: Scalars['String'];
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  email?: Maybe<Array<Maybe<EmailNotificaionPreference>>>;
  desktop?: Maybe<Array<Maybe<DesktopNotificaionPreference>>>;
};


export type Post = {
  __typename?: 'Post';
  url: Scalars['String'];
  postId: Scalars['ID'];
  creatorUserId: Scalars['ID'];
  creator: User;
  sourceGameId?: Maybe<Scalars['ID']>;
  sourceGame?: Maybe<Game>;
  message?: Maybe<Scalars['Json']>;
  mediaFileId?: Maybe<Scalars['ID']>;
  media?: Maybe<HostedFile>;
  hasData?: Maybe<Scalars['Boolean']>;
  data?: Maybe<Scalars['String']>;
  createdTime?: Maybe<Scalars['Datetime']>;
};

export type PostInput = {
  sourceGameId?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['Json']>;
  mediaFileId?: Maybe<Scalars['ID']>;
  data?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  /** deprecated - changed to publicChatChannels */
  allChatChannels?: Maybe<Array<Maybe<ChatChannel>>>;
  chatChannels: Array<Maybe<ChatChannel>>;
  recentChatMessages?: Maybe<Array<Maybe<ChatMessage>>>;
  recentChannelChatMessages?: Maybe<Array<Maybe<ChatMessage>>>;
  subscribedChatChannels?: Maybe<Array<Maybe<ChatChannel>>>;
  publicChatChannels?: Maybe<Array<Maybe<ChatChannel>>>;
  previewFile?: Maybe<HostedFile>;
  trendingGames?: Maybe<Array<Maybe<Game>>>;
  featuredGames?: Maybe<Array<Maybe<Game>>>;
  featuredExamples?: Maybe<Array<Maybe<Game>>>;
  allGames?: Maybe<Array<Maybe<Game>>>;
  game?: Maybe<Game>;
  previewGameAtUrl?: Maybe<Game>;
  previewLocalGame?: Maybe<Game>;
  /** deprecated */
  previewGame?: Maybe<Game>;
  /** entryPoint is deprecated */
  gameServerLogs?: Maybe<Scalars['Json']>;
  multiplayerRegions?: Maybe<Array<Maybe<MultiplayerRegion>>>;
  /** deprecated */
  joinableMultiplayerSessions?: Maybe<Array<Maybe<JoinableMultiplayerSession>>>;
  appNotifications?: Maybe<Array<Maybe<AppNotification>>>;
  getNotificationPreferencesV2: Scalars['Json'];
  /** deprecated */
  getNotificationPreferences?: Maybe<NotificationPreferences>;
  testHostedGameHashes?: Maybe<Scalars['Json']>;
  search?: Maybe<SearchResults>;
  autocomplete?: Maybe<SearchResults>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  me?: Maybe<User>;
  userForLoginInput?: Maybe<User>;
  userForUsername?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  userStatusHistory?: Maybe<Array<Maybe<UserStatus>>>;
  gameGlobalStorage?: Maybe<GameGlobalStorage>;
  gameUserStorage?: Maybe<GameUserStorage>;
  post?: Maybe<Post>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  postsForGame?: Maybe<Array<Maybe<Post>>>;
  postsForUser?: Maybe<Array<Maybe<Post>>>;
  mediaService: Service;
  ssoDiscourse: SsoResponse;
  docsCache?: Maybe<Scalars['Json']>;
  blogPost: BlogPost;
  allBlogPosts: Array<Maybe<BlogPost>>;
  blogPostsForUser: Array<Maybe<BlogPost>>;
  prefetchCards: Array<Maybe<Card>>;
  card: Card;
  deck: Deck;
  allDecks: Array<Maybe<Deck>>;
  deckFeed: Array<Maybe<Deck>>;
  featuredFeed: Array<Maybe<Deck>>;
  deckHistory: Array<Maybe<Deck>>;
  allScenes: Array<Maybe<Scene>>;
  sceneBackup: Scene;
  adminAllDecksWithCurationPolicies: Array<Maybe<Deck>>;
};


export type QueryChatChannelsArgs = {
  channelIds: Array<Maybe<Scalars['ID']>>;
};


export type QueryRecentChannelChatMessagesArgs = {
  channelId: Scalars['ID'];
};


export type QueryPreviewFileArgs = {
  fileId: Scalars['ID'];
};


export type QueryAllGamesArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGameArgs = {
  gameId?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryPreviewGameAtUrlArgs = {
  url: Scalars['String'];
  gameId?: Maybe<Scalars['ID']>;
};


export type QueryPreviewLocalGameArgs = {
  castleFile: Scalars['String'];
  castleFilePath?: Maybe<Scalars['String']>;
  gameId?: Maybe<Scalars['ID']>;
};


export type QueryPreviewGameArgs = {
  url: Scalars['String'];
};


export type QueryGameServerLogsArgs = {
  gameId?: Maybe<Scalars['ID']>;
  entryPoint?: Maybe<Scalars['String']>;
  castleFileUrl?: Maybe<Scalars['String']>;
};


export type QueryJoinableMultiplayerSessionsArgs = {
  isStaging?: Maybe<Scalars['Boolean']>;
};


export type QueryAppNotificationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  beforeId?: Maybe<Scalars['ID']>;
};


export type QueryTestHostedGameHashesArgs = {
  hashes: Array<Maybe<Scalars['String']>>;
};


export type QuerySearchArgs = {
  text: Scalars['String'];
};


export type QueryAutocompleteArgs = {
  text: Scalars['String'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryUsersArgs = {
  userIds: Array<Maybe<Scalars['ID']>>;
};


export type QueryUserForLoginInputArgs = {
  who: Scalars['String'];
};


export type QueryUserForUsernameArgs = {
  username: Scalars['String'];
};


export type QueryUserStatusHistoryArgs = {
  userId?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  beforeId?: Maybe<Scalars['ID']>;
};


export type QueryGameGlobalStorageArgs = {
  storageId: Scalars['String'];
  key: Scalars['String'];
};


export type QueryGameUserStorageArgs = {
  storageId: Scalars['String'];
  key: Scalars['String'];
};


export type QueryPostArgs = {
  postId: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterPostId?: Maybe<Scalars['ID']>;
};


export type QueryPostsForGameArgs = {
  gameId: Scalars['ID'];
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterPostId?: Maybe<Scalars['ID']>;
};


export type QueryPostsForUserArgs = {
  userId: Scalars['ID'];
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterPostId?: Maybe<Scalars['ID']>;
};


export type QueryMediaServiceArgs = {
  metadata?: Maybe<Scalars['Json']>;
};


export type QuerySsoDiscourseArgs = {
  sso: Scalars['String'];
  sig: Scalars['String'];
};


export type QueryBlogPostArgs = {
  blogPostId: Scalars['ID'];
};


export type QueryAllBlogPostsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterBlogPostId?: Maybe<Scalars['ID']>;
};


export type QueryBlogPostsForUserArgs = {
  userId: Scalars['ID'];
  orderBy: BlogPostOrderBy;
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterBlogPostId?: Maybe<Scalars['ID']>;
};


export type QueryPrefetchCardsArgs = {
  cardId: Scalars['ID'];
};


export type QueryCardArgs = {
  cardId: Scalars['ID'];
};


export type QueryDeckArgs = {
  deckId: Scalars['ID'];
};


export type QueryDeckFeedArgs = {
  limit?: Maybe<Scalars['Int']>;
  lastModifiedBefore?: Maybe<Scalars['Datetime']>;
};


export type QueryDeckHistoryArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QuerySceneBackupArgs = {
  cardId: Scalars['ID'];
  version: Scalars['Int'];
};

export type SsoResponse = {
  __typename?: 'SSOResponse';
  redirectUrl: Scalars['String'];
};

export type Scene = {
  __typename?: 'Scene';
  id: Scalars['ID'];
  sceneId: Scalars['ID'];
  data?: Maybe<Scalars['Json']>;
  version?: Maybe<Scalars['Int']>;
  backgroundImage?: Maybe<HostedFile>;
};

export type SceneBackup = {
  __typename?: 'SceneBackup';
  version?: Maybe<Scalars['Int']>;
  isAutosave?: Maybe<Scalars['Boolean']>;
  createdTime?: Maybe<Scalars['Datetime']>;
  backgroundImage?: Maybe<HostedFile>;
  dataSize?: Maybe<Scalars['Int']>;
};

export type ScreenCaptureResult = {
  __typename?: 'ScreenCaptureResult';
  type?: Maybe<Scalars['String']>;
  file?: Maybe<HostedFile>;
};

export type SearchResults = {
  __typename?: 'SearchResults';
  users?: Maybe<Array<Maybe<User>>>;
  games?: Maybe<Array<Maybe<Game>>>;
  chatChannels?: Maybe<Array<Maybe<ChatChannel>>>;
};

export type Service = {
  __typename?: 'Service';
  type: Scalars['String'];
  address: Scalars['String'];
};


export type UploadFileParams = {
  autoCrop?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['Json']>;
  photo?: Maybe<HostedFile>;
  websiteUrl?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  itchUsername?: Maybe<Scalars['String']>;
  gameItems?: Maybe<Array<Maybe<Game>>>;
  gamesCount?: Maybe<Scalars['Int']>;
  gamesSumPlayCount?: Maybe<Scalars['Int']>;
  createdTime?: Maybe<Scalars['Datetime']>;
  updatedTime?: Maybe<Scalars['Datetime']>;
  lastUserStatus?: Maybe<UserStatus>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  favoritedGames?: Maybe<Array<Maybe<Game>>>;
  decks?: Maybe<Array<Maybe<Deck>>>;
  adminAllDecks?: Maybe<Array<Maybe<Deck>>>;
  token?: Maybe<Scalars['String']>;
  searchScore?: Maybe<Scalars['String']>;
  /** Deprecated */
  isReal?: Maybe<Scalars['Boolean']>;
  /** Unused by client */
  location?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['Json']>;
  githubUsername?: Maybe<Scalars['String']>;
  twitchUsername?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** Admin only */
  isTestUser?: Maybe<Scalars['Boolean']>;
  postsCreated?: Maybe<Array<Maybe<Post>>>;
};


export type UserPostsCreatedArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageAfterPostId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  userId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['Json']>;
  photoFileId?: Maybe<Scalars['ID']>;
  websiteUrl?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  itchUsername?: Maybe<Scalars['String']>;
  /** Unused by client */
  location?: Maybe<Scalars['String']>;
  otherUsernames?: Maybe<Scalars['Json']>;
  links?: Maybe<Scalars['Json']>;
  info?: Maybe<Scalars['Json']>;
  githubUsername?: Maybe<Scalars['String']>;
  twitchUsername?: Maybe<Scalars['String']>;
  isTeam?: Maybe<Scalars['Boolean']>;
};

export type UserPing = {
  region: Scalars['String'];
  ping?: Maybe<Scalars['Int']>;
};

export type UserStatus = {
  __typename?: 'UserStatus';
  id: Scalars['ID'];
  userStatusId: Scalars['ID'];
  status: Scalars['String'];
  game: Game;
  isRecent: Scalars['Boolean'];
  lastPing?: Maybe<Scalars['Datetime']>;
  platform: Scalars['String'];
};

export type UserStatusGameInput = {
  url: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
};

export type UserForLoginInputQueryVariables = Exact<{
  who: Scalars['String'];
}>;


export type UserForLoginInputQuery = (
  { __typename?: 'Query' }
  & { userForLoginInput?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId'>
  )> }
);

export type LoginMutationVariables = Exact<{
  userId?: Maybe<Scalars['ID']>;
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'token'>
  )> }
);

export type GetMyDecksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyDecksQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { decks?: Maybe<Array<Maybe<(
      { __typename?: 'Deck' }
      & Pick<Deck, 'deckId' | 'title' | 'lastModified'>
    )>>> }
  )> }
);


export const UserForLoginInputDocument = gql`
    query userForLoginInput($who: String!) {
  userForLoginInput(who: $who) {
    userId
  }
}
    `;
export const LoginDocument = gql`
    mutation login($userId: ID, $password: String!) {
  login(userId: $userId, password: $password) {
    token
  }
}
    `;
export const GetMyDecksDocument = gql`
    query getMyDecks {
  me {
    decks {
      deckId
      title
      lastModified
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    userForLoginInput(variables: UserForLoginInputQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserForLoginInputQuery> {
      return withWrapper(() => client.request<UserForLoginInputQuery>(UserForLoginInputDocument, variables, requestHeaders));
    },
    login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation> {
      return withWrapper(() => client.request<LoginMutation>(LoginDocument, variables, requestHeaders));
    },
    getMyDecks(variables?: GetMyDecksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyDecksQuery> {
      return withWrapper(() => client.request<GetMyDecksQuery>(GetMyDecksDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;