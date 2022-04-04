import React from "react";
import { View, Image, Text } from "react-native";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price} calories
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

//Wow this is hacky lol
export const People = ({ indexAsset }) => {

    if(indexAsset == 1) {
      return (
        <View>
        </View>
      );
    }
    else if (indexAsset == 3) {
      return (
        <View style={{ flexDirection: "row" }}>
          {[assets.person02].map(
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
          )}
        </View>
  );
    }
    else {
      return (
        <View style={{ flexDirection: "row" }}>
        {[assets.person03, assets.person04, assets.person02].map(
            (imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
            )
          )}
        </View>
  );
  }
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        20 minutes
      </Text>
    </View>
  );
};

export const SubInfo = ({ index }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People indexAsset={index}/>
      <EndDate />
    </View>
  );
};
