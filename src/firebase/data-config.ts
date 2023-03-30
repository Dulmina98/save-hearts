import {UserBloodGroups} from "../interfaces/user-blood-groups";

export class DataConfig {

    public static readonly bloodGroups: UserBloodGroups[] = [
        {
            id: 'A-',
            label: 'A-',
        },
        {
            id: 'A+',
            label: 'A+',
        },
        {
            id: 'B-',
            label: 'B-',
        },
        {
            id: 'B+',
            label: 'B+',
        },
        {
            id: 'O-',
            label: 'O-',
        },
        {
            id: 'O+',
            label: 'O+',
        },
        {
            id: 'AB-',
            label: 'AB-',
        },
        {
            id: 'AB+',
            label: 'AB+',
        },
    ]
}