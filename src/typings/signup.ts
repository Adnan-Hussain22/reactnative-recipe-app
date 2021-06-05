import { GENDER } from "src/constants/common";

export interface PersonalInfoFormFields {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: GENDER;
}
