export class SettingService {
    private altBackground = false;
    isAltBackground() {
        return this.altBackground;
    }

    setAltBackground(altBG: boolean) {
        this.altBackground = altBG;
    }
}