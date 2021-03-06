import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';

app.initializers.add('justoverclock/country-flags', () => {
  app.extensionData
    .for('justoverclock-country-flags')
    .registerSetting({
      setting: 'justoverclock-country-flags.showFlagsOnPosts',
      label: app.translator.trans('justoverclock-country-flags.admin.showFlagsOnPosts'),
      type: 'boolean',
    })
  extend(UserListPage.prototype, 'columns', function (items) {
    items.add(
      'country',
      {
        name: app.translator.trans('justoverclock-country-flags.admin.countryColumn'),
        content: (user) => {
          const countryFlag = user.data.attributes.countryCode;
          const showFlag = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/' + countryFlag + '.svg';

          if (countryFlag === '') return ' ';

          return (
            <div>
              <img className="adminFlag" loading="lazy" src={showFlag} alt={countryFlag} />
            </div>
          );
        },
      },
      -50
    );
  });
});
