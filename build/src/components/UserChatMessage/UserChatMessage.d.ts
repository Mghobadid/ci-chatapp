import './UserChatMessage.css';
import { ICustomComponents } from '../../interfaces/IConfig';
interface IUserChatMessageProps {
    message: string;
    payload: any;
    customComponents: ICustomComponents;
}
declare const UserChatMessage: ({ message, payload, customComponents, }: IUserChatMessageProps) => JSX.Element;
export default UserChatMessage;
