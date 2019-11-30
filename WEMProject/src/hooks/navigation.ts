import { NavigationContext, NavigationRoute, NavigationParams, NavigationScreenProp } from 'react-navigation';
import { useContext } from "react"

export const useNavigation = (): NavigationScreenProp<NavigationRoute, NavigationParams> => {
  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>;
}