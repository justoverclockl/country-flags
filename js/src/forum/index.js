import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import AddCountryCodeField from "./components/AddCountryCodeField";
import UserCard from 'flarum/forum/components/UserCard';

app.initializers.add('justoverclock/user-country-info', () => {
  User.prototype.countryCode = Model.attribute('countryCode');

  extend(SettingsPage.prototype, 'settingsItems', function (items){
    items.add(
      'countryFlag',
      <AddCountryCodeField />
    )
  })
  extend(UserCard.prototype, 'infoItems', function (items) {
    const user = this.attrs.user
    let countryFlag = user.countryCode();
    if (countryFlag === '') return;
    let flagImage = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + countryFlag + '.svg';
    items.add(
      "ipinfo",
      <div className="ipinfo" id="countryCode">
        <img className="countryFlag" src={flagImage} width="25" height="25"/>
      </div>
    )
  })
});
