import hilog from '@ohos.hilog';
import BackupExtensionAbility, { BundleVersion } from '@ohos.application.BackupExtensionAbility';

const DOMAIN = 0x0000;

export default class BackupAbility extends BackupExtensionAbility {
  async onBackup() {
    hilog.info(DOMAIN, 'testTag', 'onBackup ok');
    await Promise.resolve();
  }

  async onRestore(bundleVersion: BundleVersion) {
    hilog.info(DOMAIN, 'testTag', 'onRestore ok %{public}s', JSON.stringify(bundleVersion));
    await Promise.resolve();
  }
}
