export class UserModel {
    public iduser: number;
    public firstName: string;
    public secondName: string;
    public firstSurname: string;
    public secondSurname: string;
    public email: string;
    public password: string;

    public getCompleteName(): string {
        return this.firstName + ' ' + this.secondName + ' ' + this.firstSurname + ' ' + this.secondSurname;
    }
}
