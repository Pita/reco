import faker from 'faker';
import * as fs from 'fs';
import * as path from 'path';

const LOCALES = [
  'az',
  'ar',
  'cz',
  'de',
  'de_AT',
  'de_CH',
  'en',
  'en_AU',
  'en_AU_ocker',
  'en_BORK',
  'en_CA',
  'en_GB',
  'en_IE',
  'en_IND',
  'en_US',
  'en_ZA',
  'es',
  'es_MX',
  'fa',
  'fi',
  'fr',
  'fr_CA',
  'fr_CH',
  'ge',
  'id_ID',
  'it',
  'ja',
  'ko',
  'nb_NO',
  'nep',
  'nl',
  'nl_BE',
  'pl',
  'pt_BR',
  'pt_PT',
  'ro',
  'ru',
  'sk',
  'sv',
  'tr',
  'uk',
  'vi',
  'zh_CN',
  'zh_TW',
];

const configs = [
  // {
  //   filename: 'emails',
  //   fakerFunction: faker.internet.email,
  // },
  {
    filename: 'urls',
    fakerFunction: () => faker.fake('{{internet.url}}{{system.directoryPath}}'),
  },
  // {
  //   filename: 'ip_v4',
  //   fakerFunction: faker.internet.ip,
  // },
  // {
  //   filename: 'ip_v6',
  //   fakerFunction: faker.internet.ipv6,
  // },
];

configs.forEach(({ filename, fakerFunction }) => {
  faker.seed(93475);
  const values: string[] = [];
  const TOTAL = 2000000;
  const TOTAL_PER_LOCALE = Math.floor(TOTAL / LOCALES.length);

  for (let i = 0; i < TOTAL_PER_LOCALE; i++) {
    LOCALES.forEach((locale) => {
      faker.locale = locale;
      values.push(fakerFunction());
    });
  }

  fs.writeFileSync(
    path.resolve(__dirname, `fake_data/${filename}.json`),
    JSON.stringify(values, null, 2),
    'utf8',
  );
});
