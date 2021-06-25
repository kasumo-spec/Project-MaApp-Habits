import { AllGroupProvider } from "./AllGroups";
import { GroupsUserProvider } from "./GroupsUser";
import { TokenProvider } from "./Token";
import { HabitsProvider } from "./Habits";
import { UserProvider } from "./User";
import { HeaderStateProvider} from "./HeaderState";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupsUserProvider>
            <AllGroupProvider>
                <HeaderStateProvider>
                    {children}
                </HeaderStateProvider>
            </AllGroupProvider>
          </GroupsUserProvider>
        </HabitsProvider>
      </UserProvider>
    </TokenProvider>
  );
};

export default Providers; 
