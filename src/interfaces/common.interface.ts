export interface IInfo {
    name: string,
    designation: string,
    title: string,
    address: string,
    dob: string
}

export interface IProps {
    personalInfo: IInfo;
    children?: React.ReactNode;
}