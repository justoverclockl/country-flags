import app from 'flarum/forum/app'
import Component from "flarum/Component";

export default class AddCountryCodeField extends Component {
  view() {
    return (
      <fieldset className="Settings-theme">
        <legend>Country Code</legend>
        <input className="FormControl countryCode" name="countryCode" placeholder="e.g. IT" type="text" onblur={this.saveValue.bind(this)}/>
      </fieldset>
    );
  }

  saveValue(e) {
    const user = app.session.user;
    user
      .save({
        countryCode: e.target.value,
      })
  }
}
