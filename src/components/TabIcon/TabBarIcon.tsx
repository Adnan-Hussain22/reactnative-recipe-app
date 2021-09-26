import * as React from "react";
import { AvatarIcon } from "src/components/Svgs/AvatarIcon";
import { CommunityIcon } from "src/components/Svgs/CommunityIcon";
import { DiscoverIcon } from "src/components/Svgs/DiscoverIcon";
import { ScanIcon } from "src/components/Svgs/ScanIcon";
import { SearchIcon } from "src/components/Svgs/SearchIcon";
import { SvgWrapper } from "src/components/Svgs/SvgWrapper";
import { COLORS } from "src/constants/colors";
import { AUHTENTICATED_ROUTES } from "src/constants/Routes";
import { usePlateform } from "src/hooks/usePlateform";
import { moderateScale } from "src/utils/scale";

interface TabBarIconProps {
  focused: boolean;
  routeName: string;
}

const Icon: React.FC<{ color: string; routeName: string }> = ({
  routeName,
  color,
}) => {
  switch (routeName) {
    case AUHTENTICATED_ROUTES.DISCOVER_STACK:
      return <DiscoverIcon color={color} />;
    case AUHTENTICATED_ROUTES.SEARCH:
      return <SearchIcon color={color} />;
    case AUHTENTICATED_ROUTES.CREATE:
      return <ScanIcon color={color} />;
    case AUHTENTICATED_ROUTES.COMMUNITY:
      return <CommunityIcon color={color} />;
    case AUHTENTICATED_ROUTES.PROFILE:
      return <AvatarIcon color={color} />;
    default:
      throw new Error(
        "for new tab bar item, an icon must be added to TabBarIcon"
      );
  }
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, routeName }) => {
  const { isIos } = usePlateform();
  return (
    <SvgWrapper size={moderateScale(25)} style={{ marginTop: isIos ? 10 : 0 }}>
      <Icon
        routeName={routeName}
        color={focused ? COLORS.primaryRed : COLORS.textGrey}
      />
    </SvgWrapper>
  );
};

export default TabBarIcon;
