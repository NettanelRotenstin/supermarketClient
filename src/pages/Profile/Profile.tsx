 
import UserDetails from "../../components/UserDetails/UserDetails";
import ListReceipts from "../../components/Receipts/ListReceipts";
 
import './Profile.css'

export default function Profile() {    
  
    return (
        <div className="profile">
            <UserDetails />
            <ListReceipts />
        </div>
    );
}
