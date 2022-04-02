
import "./allcontacts.css"
export const AllContacts=()=>{
    return(
        <div>
            <div className="audi">
                <h1>Audience</h1>
                <h2>abc.com</h2>
                <p>Your audience has 1 contacts. 1 of these are subscribers.</p>
            </div>
            <div className="over">
                
                <p id="overview">Overview</p>
                <select name="" id="select1">
                    <option value="">Manage contacts</option>
                    <option value="">View archieved contacts</option>
                    <option value="">Unsubscribed addresses</option>
                    <option value="">Groups</option>
                    <option value="">Segment</option>
                    <option value="">Tags</option>
                    <option value="">Import history</option>
                    <option value="">Audience export</option>
                    <option value="">Contacts export</option>
                    <option value="">Archieve all contacts</option>
                </select>
                <select name="" id="select2">
                    <option value="">Add contacts</option>
                    <option value="">Add Subscriber</option>
                    <option value="">Import contacts</option>
                </select>
                <p>Signup forms</p>
                <p>Preferences center</p>
                <select name="" id="select3">
                    <option value="">Settings</option>
                    <option value="">Audience name and defaults</option>
                    <option value="">GDPR fields and settings</option>
                    <option value="">Publicity settings</option>
                    <option value="">Audience fields and *|MERGE|* tags</option>
                    <option value="">Required email footer content</option>
                    <option value="">Email beamer</option>
                    <option value="">Google analytics</option>
                    <option value="">Webhooks</option>
                </select>
                
                <p>Inbox</p>
                <p>Surverys</p>
            </div>
            <div className="srchdiv">
                <img  className="srchimg" src="https://img.icons8.com/ios/72/search--v1.png" alt="" />
                <hr id="rule" />
            </div>
            <div className="column">
                <select className="toggle" name="" id=" toggle">
                    <option value="">Toggle columns</option>
                    <option value="">First Name</option>
                    <option value="">Last Name</option>
                    <option value="">Address</option>
                    <option value="">Phone No.</option>
                    <option value="">Birthday</option>
                </select>
                <button className="export">Export Audience</button>
            </div>
            <div className="filterby">
                <select className="sgmnt" name="" id="">
                    <option value="">Filter by Tags</option>
                </select>
                <select className="sgmnt" name="" id="">
                    <option value="">View segment</option>
                </select>
               
                <p id="Newsgmnt">New Segment</p>

            </div>
            <div className="tabl">
                <table id="maintable">
                   <tr>
                       <th>Email Address</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Address</th>
                       <th>Tags</th>
                       <th>Eamil Marketing</th>
                       <th>Source</th>
                       <th>Contact rating</th>
                       <th>Date Added</th>
                       <th>Last changed</th>
                   </tr>
                   <tr>
                       
                      {/* table row data here */}
                   </tr>
                </table>
            </div>
        </div>
    )
}