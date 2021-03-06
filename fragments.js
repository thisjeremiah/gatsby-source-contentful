"use strict";

exports.__esModule = true;
/* eslint-disable */
const contentfulAssetResolutions = exports.contentfulAssetResolutions = graphql`
  fragment GatsbyContentfulResolutions on ContentfulResolutions {
    base64
    width
    height
    src
    srcSet
  }
`;

const contentfulAssetResolutionsNoBase64 = exports.contentfulAssetResolutionsNoBase64 = graphql`
  fragment GatsbyContentfulResolutions_noBase64 on ContentfulResolutions {
    width
    height
    src
    srcSet
  }
`;

const contentfulAssetResolutionsPreferWebp = exports.contentfulAssetResolutionsPreferWebp = graphql`
  fragment GatsbyContentfulResolutions_withWebp on ContentfulResolutions {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;

const contentfulAssetResolutionsPreferWebpNoBase64 = exports.contentfulAssetResolutionsPreferWebpNoBase64 = graphql`
  fragment GatsbyContentfulResolutions_withWebp_noBase64 on ContentfulResolutions {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;

const contentfulAssetSizes = exports.contentfulAssetSizes = graphql`
  fragment GatsbyContentfulSizes on ContentfulSizes {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;

const contentfulAssetSizesNoBase64 = exports.contentfulAssetSizesNoBase64 = graphql`
  fragment GatsbyContentfulSizes_noBase64 on ContentfulSizes {
    aspectRatio
    src
    srcSet
    sizes
  }
`;

const contentfulAssetSizesPreferWebp = exports.contentfulAssetSizesPreferWebp = graphql`
  fragment GatsbyContentfulSizes_withWebp on ContentfulSizes {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;

const contentfulAssetSizesPreferWebpNoBase64 = exports.contentfulAssetSizesPreferWebpNoBase64 = graphql`
  fragment GatsbyContentfulSizes_withWebp_noBase64 on ContentfulSizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;