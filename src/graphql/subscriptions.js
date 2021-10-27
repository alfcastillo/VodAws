/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVodAsset = /* GraphQL */ `
  subscription OnCreateVodAsset {
    onCreateVodAsset {
      id
      title
      description
      video {
        id
        token
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVodAsset = /* GraphQL */ `
  subscription OnUpdateVodAsset {
    onUpdateVodAsset {
      id
      title
      description
      video {
        id
        token
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVodAsset = /* GraphQL */ `
  subscription OnDeleteVodAsset {
    onDeleteVodAsset {
      id
      title
      description
      video {
        id
        token
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVideoObject = /* GraphQL */ `
  subscription OnCreateVideoObject {
    onCreateVideoObject {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVideoObject = /* GraphQL */ `
  subscription OnUpdateVideoObject {
    onUpdateVideoObject {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVideoObject = /* GraphQL */ `
  subscription OnDeleteVideoObject {
    onDeleteVideoObject {
      id
      token
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVoddemo = /* GraphQL */ `
  subscription OnCreateVoddemo(
    $guid: String
    $srcBucket: String
    $srcVideo: String
    $startTime: String
    $dashUrl: String
  ) {
    onCreateVoddemo(
      guid: $guid
      srcBucket: $srcBucket
      srcVideo: $srcVideo
      startTime: $startTime
      dashUrl: $dashUrl
    ) {
      guid
      srcBucket
      srcVideo
      startTime
      dashUrl
      hlsUrl
      mp4Urls
    }
  }
`;
export const onUpdateVoddemo = /* GraphQL */ `
  subscription OnUpdateVoddemo(
    $guid: String
    $srcBucket: String
    $srcVideo: String
    $startTime: String
    $dashUrl: String
  ) {
    onUpdateVoddemo(
      guid: $guid
      srcBucket: $srcBucket
      srcVideo: $srcVideo
      startTime: $startTime
      dashUrl: $dashUrl
    ) {
      guid
      srcBucket
      srcVideo
      startTime
      dashUrl
      hlsUrl
      mp4Urls
    }
  }
`;
export const onDeleteVoddemo = /* GraphQL */ `
  subscription OnDeleteVoddemo(
    $guid: String
    $srcBucket: String
    $srcVideo: String
    $startTime: String
    $dashUrl: String
  ) {
    onDeleteVoddemo(
      guid: $guid
      srcBucket: $srcBucket
      srcVideo: $srcVideo
      startTime: $startTime
      dashUrl: $dashUrl
    ) {
      guid
      srcBucket
      srcVideo
      startTime
      dashUrl
      hlsUrl
      mp4Urls
    }
  }
`;
