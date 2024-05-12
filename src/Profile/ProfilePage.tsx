import {ProfileContent} from "./ProfileContent";
import {Page} from "../Layout/Page";

export const ProfilePage = () => {
    return (
        <Page returnButton={true}>
            <ProfileContent/>
        </Page>
    )
}
