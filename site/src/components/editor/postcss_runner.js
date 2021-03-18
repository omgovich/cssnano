/* eslint-disable no-warning-comments */
/* eslint-disable no-unused-vars */
import postcss from 'postcss';
import { pkgnameToVarName } from '../../helper/naming';
import cssnanoPresetLite from 'cssnano-preset-lite';
import cssnanoPresetAdvanced from 'cssnano-preset-advanced';
import cssnanoPresetDefault from 'cssnano-preset-default';

const moduleMap = {
  cssnanoPresetLite,
  cssnanoPresetAdvanced,
  cssnanoPresetDefault,
};

export default (input, config) => {
  const configName = pkgnameToVarName(config[0]);
  const { plugins: nanoPlugins } = moduleMap[configName](config[1]);
  const postcssPlugins = [];
  for (const plugin of nanoPlugins) {
    const [processor, opts] = plugin;
    if (
        typeof opts === 'undefined' ||
        (typeof opts === 'object' && !opts.exclude) ||
        (typeof opts === 'boolean' && opts === true)
      ) {
        postcssPlugins.push(processor(opts));
    }
  }
  return new Promise((resolve, reject) => {
    postcss(postcssPlugins)
      .process(input)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
