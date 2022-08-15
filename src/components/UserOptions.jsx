import "../styles/useroptions.css";
import { Switch } from "./index";

export default function UserOptions() {
  return (
    <section className="user-modal">
      <ul>
        <li>
          <p>Dark Mode</p> <Switch />
        </li>
        <li>Profile</li>
        <li>What's new</li>
        <li>Help</li>
        <li>Send feedback</li>
        <li>Hints and shortcuts</li>
        <li>Logout</li>
      </ul>
    </section>
  );
}
