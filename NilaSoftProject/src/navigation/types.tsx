import { MainStackParamList } from './MainStack';
import { AuthStackParamList } from './AuthStack';
import { ChatStackParamList } from './ChatStack';
import { HomeStackParamList } from './HomeStack';
import { TabNavigatorStackParamList } from './TabNavigator';
export type RootStackParamList =
    MainStackParamList &
    AuthStackParamList &
    ChatStackParamList &
    HomeStackParamList &
    TabNavigatorStackParamList;

declare global {
    // Specifying this type is important if you heavily use useNavigation, Link etc. in your app since it'll ensure type-safety.
    // READ MORE: https://reactnavigation.org/docs/typescript/#specifying-default-types-for-usenavigation-link-ref-etc

    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface RootParamList extends RootStackParamList { }
    }
}
