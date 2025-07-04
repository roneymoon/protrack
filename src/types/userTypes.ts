import { Access } from "./accessType";

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
    ORG_USER = "organization_user",
    ORG_MANAGER = "organization_manager",
    SUPER_ADMIN = "super_admin",
}

export enum UserStatus {
    AVAILABLE = "available",
    BUSY = "busy",
    DONOT_DISTURB = "do no disturb",
    BRB = "be right back",
    APPEAR_AWAY = "appear away",
    APPEAR_OFFLINE = "appear offline",
    OFFLINE = "offline",
}

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    organizationId: string;
    role: UserRole;
    createdAt?: string;
    updatedAt?: string;
    isActive: boolean;
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
    access: Access;
    status?: UserStatus; 
    phoneNumber?: string; // Optional, as not all users may have a phone number
    profilePicture?: string; // Optional, as not all users may have a profile picture
    lastLogin?: string; // Optional, as not all users may have a last login timestamp
    lastPasswordChange?: string; // Optional, as not all users may have a last password change timestamp
    lastEmailChange?: string; // Optional, as not all users may have a last email change timestamp
    lastPhoneChange?: string; // Optional, as not all users may have a last phone number change timestamp
}
