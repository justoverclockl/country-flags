import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import AddCountryCodeField from './components/AddCountryCodeField';
import UserCard from 'flarum/forum/components/UserCard';
import EditUserModal from 'flarum/forum/components/EditUserModal';
import Stream from 'flarum/utils/Stream';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('justoverclock/user-country-info', () => {
  User.prototype.countryCode = Model.attribute('countryCode');

  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    items.add('countryFlag', <AddCountryCodeField/>);
  });
  extend(UserCard.prototype, 'infoItems', function (items) {
    const user = this.attrs.user;
    let countryFlag = user.countryCode();
    if (countryFlag === '') return;
    let flagImage = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + countryFlag + '.svg';

    items.add(
      'ipinfo',
      <div className="ipinfo" id="countryCode">
        <img className="countryFlag" src={flagImage} width="25" height="25"/>
      </div>
    );
  });
  extend(EditUserModal.prototype, 'oninit', function () {
    this.countryCode = Stream(this.attrs.user.countryCode());
  });
  extend(EditUserModal.prototype, 'fields', function (items) {
    items.add(
      'countryCode',
      <div className="Form-group">
        <label>{app.translator.trans('justoverclock-country-flags.forum.inputCountryCode')}</label>
        <input className="FormControl" bidi={this.countryCode}/>
      </div>,
      1
    );
  });
  extend(EditUserModal.prototype, 'data', function (data) {
    const user = this.attrs.user;
    if (this.countryCode() !== user.countryCode()) {
      data.countryCode = this.countryCode();
    }
  });
  extend(CommentPost.prototype, 'headerItems', function (items) {
    if (app.forum.attribute('justoverclock-country-flags.showFlagsOnPosts') === true) {
      const user = this.attrs.post.user();
      let countryFlag = user.countryCode();
      let flagImage = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + countryFlag + '.svg';
      if (countryFlag === '') return;
      if (!user) return;
      items.add(
        'country-flag',
        <div className="ipinfo" id="countryCode">
          <img className="countryFlag post" src={flagImage} alt={countryFlag} width="25" height="25"/>
        </div>
      );
    }
  })
});
