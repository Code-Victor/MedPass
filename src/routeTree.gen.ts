/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdminVerifyKycImport } from './routes/admin/verify-kyc'
import { Route as AdminSignupImport } from './routes/admin/signup'
import { Route as AdminLoginImport } from './routes/admin/login'
import { Route as AdminInviteSignupImport } from './routes/admin/invite-signup'
import { Route as AdminCreateHospitalImport } from './routes/admin/create-hospital'
import { Route as AdminAdminauthImport } from './routes/admin/_adminauth'

// Create Virtual Routes

const AdminImport = createFileRoute('/admin')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AdminAdminauthIndexLazyImport = createFileRoute('/admin/_adminauth/')()
const AdminAdminauthSettingsLazyImport = createFileRoute(
  '/admin/_adminauth/settings',
)()
const AdminAdminauthProfileLazyImport = createFileRoute(
  '/admin/_adminauth/profile',
)()
const AdminAdminauthNotificationsLazyImport = createFileRoute(
  '/admin/_adminauth/notifications',
)()
const AdminAdminauthPatientRecordsIndexLazyImport = createFileRoute(
  '/admin/_adminauth/patient-records/',
)()
const AdminAdminauthDepartmentIndexLazyImport = createFileRoute(
  '/admin/_adminauth/department/',
)()
const AdminAdminauthPatientRecordsPatientIdLazyImport = createFileRoute(
  '/admin/_adminauth/patient-records/$patientId',
)()
const AdminAdminauthDepartmentDepartmentIdIndexLazyImport = createFileRoute(
  '/admin/_adminauth/department/$departmentId/',
)()
const AdminAdminauthPatientRecordsRecordsPatientIdLazyImport = createFileRoute(
  '/admin/_adminauth/patient-records/records/$patientId',
)()
const AdminAdminauthDepartmentDepartmentIdDoctorLazyImport = createFileRoute(
  '/admin/_adminauth/department/$departmentId/doctor',
)()

// Create/Update Routes

const AdminRoute = AdminImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AdminVerifyKycRoute = AdminVerifyKycImport.update({
  path: '/verify-kyc',
  getParentRoute: () => AdminRoute,
} as any)

const AdminSignupRoute = AdminSignupImport.update({
  path: '/signup',
  getParentRoute: () => AdminRoute,
} as any)

const AdminLoginRoute = AdminLoginImport.update({
  path: '/login',
  getParentRoute: () => AdminRoute,
} as any)

const AdminInviteSignupRoute = AdminInviteSignupImport.update({
  path: '/invite-signup',
  getParentRoute: () => AdminRoute,
} as any)

const AdminCreateHospitalRoute = AdminCreateHospitalImport.update({
  path: '/create-hospital',
  getParentRoute: () => AdminRoute,
} as any)

const AdminAdminauthRoute = AdminAdminauthImport.update({
  id: '/_adminauth',
  getParentRoute: () => AdminRoute,
} as any)

const AdminAdminauthIndexLazyRoute = AdminAdminauthIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AdminAdminauthRoute,
} as any).lazy(() =>
  import('./routes/admin/_adminauth/index.lazy').then((d) => d.Route),
)

const AdminAdminauthSettingsLazyRoute = AdminAdminauthSettingsLazyImport.update(
  {
    path: '/settings',
    getParentRoute: () => AdminAdminauthRoute,
  } as any,
).lazy(() =>
  import('./routes/admin/_adminauth/settings.lazy').then((d) => d.Route),
)

const AdminAdminauthProfileLazyRoute = AdminAdminauthProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => AdminAdminauthRoute,
} as any).lazy(() =>
  import('./routes/admin/_adminauth/profile.lazy').then((d) => d.Route),
)

const AdminAdminauthNotificationsLazyRoute =
  AdminAdminauthNotificationsLazyImport.update({
    path: '/notifications',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import('./routes/admin/_adminauth/notifications.lazy').then((d) => d.Route),
  )

const AdminAdminauthPatientRecordsIndexLazyRoute =
  AdminAdminauthPatientRecordsIndexLazyImport.update({
    path: '/patient-records/',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import('./routes/admin/_adminauth/patient-records/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AdminAdminauthDepartmentIndexLazyRoute =
  AdminAdminauthDepartmentIndexLazyImport.update({
    path: '/department/',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import('./routes/admin/_adminauth/department/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AdminAdminauthPatientRecordsPatientIdLazyRoute =
  AdminAdminauthPatientRecordsPatientIdLazyImport.update({
    path: '/patient-records/$patientId',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import('./routes/admin/_adminauth/patient-records/$patientId.lazy').then(
      (d) => d.Route,
    ),
  )

const AdminAdminauthDepartmentDepartmentIdIndexLazyRoute =
  AdminAdminauthDepartmentDepartmentIdIndexLazyImport.update({
    path: '/department/$departmentId/',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import(
      './routes/admin/_adminauth/department/$departmentId/index.lazy'
    ).then((d) => d.Route),
  )

const AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute =
  AdminAdminauthPatientRecordsRecordsPatientIdLazyImport.update({
    path: '/patient-records/records/$patientId',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import(
      './routes/admin/_adminauth/patient-records/records.$patientId.lazy'
    ).then((d) => d.Route),
  )

const AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute =
  AdminAdminauthDepartmentDepartmentIdDoctorLazyImport.update({
    path: '/department/$departmentId/doctor',
    getParentRoute: () => AdminAdminauthRoute,
  } as any).lazy(() =>
    import(
      './routes/admin/_adminauth/department/$departmentId/doctor.lazy'
    ).then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/admin/_adminauth': {
      id: '/admin/_adminauth'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminAdminauthImport
      parentRoute: typeof AdminRoute
    }
    '/admin/create-hospital': {
      id: '/admin/create-hospital'
      path: '/create-hospital'
      fullPath: '/admin/create-hospital'
      preLoaderRoute: typeof AdminCreateHospitalImport
      parentRoute: typeof AdminImport
    }
    '/admin/invite-signup': {
      id: '/admin/invite-signup'
      path: '/invite-signup'
      fullPath: '/admin/invite-signup'
      preLoaderRoute: typeof AdminInviteSignupImport
      parentRoute: typeof AdminImport
    }
    '/admin/login': {
      id: '/admin/login'
      path: '/login'
      fullPath: '/admin/login'
      preLoaderRoute: typeof AdminLoginImport
      parentRoute: typeof AdminImport
    }
    '/admin/signup': {
      id: '/admin/signup'
      path: '/signup'
      fullPath: '/admin/signup'
      preLoaderRoute: typeof AdminSignupImport
      parentRoute: typeof AdminImport
    }
    '/admin/verify-kyc': {
      id: '/admin/verify-kyc'
      path: '/verify-kyc'
      fullPath: '/admin/verify-kyc'
      preLoaderRoute: typeof AdminVerifyKycImport
      parentRoute: typeof AdminImport
    }
    '/admin/_adminauth/notifications': {
      id: '/admin/_adminauth/notifications'
      path: '/notifications'
      fullPath: '/admin/notifications'
      preLoaderRoute: typeof AdminAdminauthNotificationsLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/profile': {
      id: '/admin/_adminauth/profile'
      path: '/profile'
      fullPath: '/admin/profile'
      preLoaderRoute: typeof AdminAdminauthProfileLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/settings': {
      id: '/admin/_adminauth/settings'
      path: '/settings'
      fullPath: '/admin/settings'
      preLoaderRoute: typeof AdminAdminauthSettingsLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/': {
      id: '/admin/_adminauth/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminAdminauthIndexLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/patient-records/$patientId': {
      id: '/admin/_adminauth/patient-records/$patientId'
      path: '/patient-records/$patientId'
      fullPath: '/admin/patient-records/$patientId'
      preLoaderRoute: typeof AdminAdminauthPatientRecordsPatientIdLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/department/': {
      id: '/admin/_adminauth/department/'
      path: '/department'
      fullPath: '/admin/department'
      preLoaderRoute: typeof AdminAdminauthDepartmentIndexLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/patient-records/': {
      id: '/admin/_adminauth/patient-records/'
      path: '/patient-records'
      fullPath: '/admin/patient-records'
      preLoaderRoute: typeof AdminAdminauthPatientRecordsIndexLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/department/$departmentId/doctor': {
      id: '/admin/_adminauth/department/$departmentId/doctor'
      path: '/department/$departmentId/doctor'
      fullPath: '/admin/department/$departmentId/doctor'
      preLoaderRoute: typeof AdminAdminauthDepartmentDepartmentIdDoctorLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/patient-records/records/$patientId': {
      id: '/admin/_adminauth/patient-records/records/$patientId'
      path: '/patient-records/records/$patientId'
      fullPath: '/admin/patient-records/records/$patientId'
      preLoaderRoute: typeof AdminAdminauthPatientRecordsRecordsPatientIdLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
    '/admin/_adminauth/department/$departmentId/': {
      id: '/admin/_adminauth/department/$departmentId/'
      path: '/department/$departmentId'
      fullPath: '/admin/department/$departmentId'
      preLoaderRoute: typeof AdminAdminauthDepartmentDepartmentIdIndexLazyImport
      parentRoute: typeof AdminAdminauthImport
    }
  }
}

// Create and export the route tree

interface AdminAdminauthRouteChildren {
  AdminAdminauthNotificationsLazyRoute: typeof AdminAdminauthNotificationsLazyRoute
  AdminAdminauthProfileLazyRoute: typeof AdminAdminauthProfileLazyRoute
  AdminAdminauthSettingsLazyRoute: typeof AdminAdminauthSettingsLazyRoute
  AdminAdminauthIndexLazyRoute: typeof AdminAdminauthIndexLazyRoute
  AdminAdminauthPatientRecordsPatientIdLazyRoute: typeof AdminAdminauthPatientRecordsPatientIdLazyRoute
  AdminAdminauthDepartmentIndexLazyRoute: typeof AdminAdminauthDepartmentIndexLazyRoute
  AdminAdminauthPatientRecordsIndexLazyRoute: typeof AdminAdminauthPatientRecordsIndexLazyRoute
  AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute: typeof AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute
  AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute: typeof AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute
  AdminAdminauthDepartmentDepartmentIdIndexLazyRoute: typeof AdminAdminauthDepartmentDepartmentIdIndexLazyRoute
}

const AdminAdminauthRouteChildren: AdminAdminauthRouteChildren = {
  AdminAdminauthNotificationsLazyRoute: AdminAdminauthNotificationsLazyRoute,
  AdminAdminauthProfileLazyRoute: AdminAdminauthProfileLazyRoute,
  AdminAdminauthSettingsLazyRoute: AdminAdminauthSettingsLazyRoute,
  AdminAdminauthIndexLazyRoute: AdminAdminauthIndexLazyRoute,
  AdminAdminauthPatientRecordsPatientIdLazyRoute:
    AdminAdminauthPatientRecordsPatientIdLazyRoute,
  AdminAdminauthDepartmentIndexLazyRoute:
    AdminAdminauthDepartmentIndexLazyRoute,
  AdminAdminauthPatientRecordsIndexLazyRoute:
    AdminAdminauthPatientRecordsIndexLazyRoute,
  AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute:
    AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute,
  AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute:
    AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute,
  AdminAdminauthDepartmentDepartmentIdIndexLazyRoute:
    AdminAdminauthDepartmentDepartmentIdIndexLazyRoute,
}

const AdminAdminauthRouteWithChildren = AdminAdminauthRoute._addFileChildren(
  AdminAdminauthRouteChildren,
)

interface AdminRouteChildren {
  AdminAdminauthRoute: typeof AdminAdminauthRouteWithChildren
  AdminCreateHospitalRoute: typeof AdminCreateHospitalRoute
  AdminInviteSignupRoute: typeof AdminInviteSignupRoute
  AdminLoginRoute: typeof AdminLoginRoute
  AdminSignupRoute: typeof AdminSignupRoute
  AdminVerifyKycRoute: typeof AdminVerifyKycRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminAdminauthRoute: AdminAdminauthRouteWithChildren,
  AdminCreateHospitalRoute: AdminCreateHospitalRoute,
  AdminInviteSignupRoute: AdminInviteSignupRoute,
  AdminLoginRoute: AdminLoginRoute,
  AdminSignupRoute: AdminSignupRoute,
  AdminVerifyKycRoute: AdminVerifyKycRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/admin': typeof AdminAdminauthRouteWithChildren
  '/admin/create-hospital': typeof AdminCreateHospitalRoute
  '/admin/invite-signup': typeof AdminInviteSignupRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/signup': typeof AdminSignupRoute
  '/admin/verify-kyc': typeof AdminVerifyKycRoute
  '/admin/notifications': typeof AdminAdminauthNotificationsLazyRoute
  '/admin/profile': typeof AdminAdminauthProfileLazyRoute
  '/admin/settings': typeof AdminAdminauthSettingsLazyRoute
  '/admin/': typeof AdminAdminauthIndexLazyRoute
  '/admin/patient-records/$patientId': typeof AdminAdminauthPatientRecordsPatientIdLazyRoute
  '/admin/department': typeof AdminAdminauthDepartmentIndexLazyRoute
  '/admin/patient-records': typeof AdminAdminauthPatientRecordsIndexLazyRoute
  '/admin/department/$departmentId/doctor': typeof AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute
  '/admin/patient-records/records/$patientId': typeof AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute
  '/admin/department/$departmentId': typeof AdminAdminauthDepartmentDepartmentIdIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/admin': typeof AdminAdminauthIndexLazyRoute
  '/admin/create-hospital': typeof AdminCreateHospitalRoute
  '/admin/invite-signup': typeof AdminInviteSignupRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/signup': typeof AdminSignupRoute
  '/admin/verify-kyc': typeof AdminVerifyKycRoute
  '/admin/notifications': typeof AdminAdminauthNotificationsLazyRoute
  '/admin/profile': typeof AdminAdminauthProfileLazyRoute
  '/admin/settings': typeof AdminAdminauthSettingsLazyRoute
  '/admin/patient-records/$patientId': typeof AdminAdminauthPatientRecordsPatientIdLazyRoute
  '/admin/department': typeof AdminAdminauthDepartmentIndexLazyRoute
  '/admin/patient-records': typeof AdminAdminauthPatientRecordsIndexLazyRoute
  '/admin/department/$departmentId/doctor': typeof AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute
  '/admin/patient-records/records/$patientId': typeof AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute
  '/admin/department/$departmentId': typeof AdminAdminauthDepartmentDepartmentIdIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/admin': typeof AdminRouteWithChildren
  '/admin/_adminauth': typeof AdminAdminauthRouteWithChildren
  '/admin/create-hospital': typeof AdminCreateHospitalRoute
  '/admin/invite-signup': typeof AdminInviteSignupRoute
  '/admin/login': typeof AdminLoginRoute
  '/admin/signup': typeof AdminSignupRoute
  '/admin/verify-kyc': typeof AdminVerifyKycRoute
  '/admin/_adminauth/notifications': typeof AdminAdminauthNotificationsLazyRoute
  '/admin/_adminauth/profile': typeof AdminAdminauthProfileLazyRoute
  '/admin/_adminauth/settings': typeof AdminAdminauthSettingsLazyRoute
  '/admin/_adminauth/': typeof AdminAdminauthIndexLazyRoute
  '/admin/_adminauth/patient-records/$patientId': typeof AdminAdminauthPatientRecordsPatientIdLazyRoute
  '/admin/_adminauth/department/': typeof AdminAdminauthDepartmentIndexLazyRoute
  '/admin/_adminauth/patient-records/': typeof AdminAdminauthPatientRecordsIndexLazyRoute
  '/admin/_adminauth/department/$departmentId/doctor': typeof AdminAdminauthDepartmentDepartmentIdDoctorLazyRoute
  '/admin/_adminauth/patient-records/records/$patientId': typeof AdminAdminauthPatientRecordsRecordsPatientIdLazyRoute
  '/admin/_adminauth/department/$departmentId/': typeof AdminAdminauthDepartmentDepartmentIdIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/admin'
    | '/admin/create-hospital'
    | '/admin/invite-signup'
    | '/admin/login'
    | '/admin/signup'
    | '/admin/verify-kyc'
    | '/admin/notifications'
    | '/admin/profile'
    | '/admin/settings'
    | '/admin/'
    | '/admin/patient-records/$patientId'
    | '/admin/department'
    | '/admin/patient-records'
    | '/admin/department/$departmentId/doctor'
    | '/admin/patient-records/records/$patientId'
    | '/admin/department/$departmentId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/admin'
    | '/admin/create-hospital'
    | '/admin/invite-signup'
    | '/admin/login'
    | '/admin/signup'
    | '/admin/verify-kyc'
    | '/admin/notifications'
    | '/admin/profile'
    | '/admin/settings'
    | '/admin/patient-records/$patientId'
    | '/admin/department'
    | '/admin/patient-records'
    | '/admin/department/$departmentId/doctor'
    | '/admin/patient-records/records/$patientId'
    | '/admin/department/$departmentId'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/admin'
    | '/admin/_adminauth'
    | '/admin/create-hospital'
    | '/admin/invite-signup'
    | '/admin/login'
    | '/admin/signup'
    | '/admin/verify-kyc'
    | '/admin/_adminauth/notifications'
    | '/admin/_adminauth/profile'
    | '/admin/_adminauth/settings'
    | '/admin/_adminauth/'
    | '/admin/_adminauth/patient-records/$patientId'
    | '/admin/_adminauth/department/'
    | '/admin/_adminauth/patient-records/'
    | '/admin/_adminauth/department/$departmentId/doctor'
    | '/admin/_adminauth/patient-records/records/$patientId'
    | '/admin/_adminauth/department/$departmentId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  AdminRoute: typeof AdminRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  AdminRoute: AdminRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/admin"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/admin": {
      "filePath": "admin",
      "children": [
        "/admin/_adminauth",
        "/admin/create-hospital",
        "/admin/invite-signup",
        "/admin/login",
        "/admin/signup",
        "/admin/verify-kyc"
      ]
    },
    "/admin/_adminauth": {
      "filePath": "admin/_adminauth.tsx",
      "parent": "/admin",
      "children": [
        "/admin/_adminauth/notifications",
        "/admin/_adminauth/profile",
        "/admin/_adminauth/settings",
        "/admin/_adminauth/",
        "/admin/_adminauth/patient-records/$patientId",
        "/admin/_adminauth/department/",
        "/admin/_adminauth/patient-records/",
        "/admin/_adminauth/department/$departmentId/doctor",
        "/admin/_adminauth/patient-records/records/$patientId",
        "/admin/_adminauth/department/$departmentId/"
      ]
    },
    "/admin/create-hospital": {
      "filePath": "admin/create-hospital.tsx",
      "parent": "/admin"
    },
    "/admin/invite-signup": {
      "filePath": "admin/invite-signup.tsx",
      "parent": "/admin"
    },
    "/admin/login": {
      "filePath": "admin/login.tsx",
      "parent": "/admin"
    },
    "/admin/signup": {
      "filePath": "admin/signup.tsx",
      "parent": "/admin"
    },
    "/admin/verify-kyc": {
      "filePath": "admin/verify-kyc.tsx",
      "parent": "/admin"
    },
    "/admin/_adminauth/notifications": {
      "filePath": "admin/_adminauth/notifications.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/profile": {
      "filePath": "admin/_adminauth/profile.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/settings": {
      "filePath": "admin/_adminauth/settings.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/": {
      "filePath": "admin/_adminauth/index.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/patient-records/$patientId": {
      "filePath": "admin/_adminauth/patient-records/$patientId.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/department/": {
      "filePath": "admin/_adminauth/department/index.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/patient-records/": {
      "filePath": "admin/_adminauth/patient-records/index.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/department/$departmentId/doctor": {
      "filePath": "admin/_adminauth/department/$departmentId/doctor.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/patient-records/records/$patientId": {
      "filePath": "admin/_adminauth/patient-records/records.$patientId.lazy.tsx",
      "parent": "/admin/_adminauth"
    },
    "/admin/_adminauth/department/$departmentId/": {
      "filePath": "admin/_adminauth/department/$departmentId/index.lazy.tsx",
      "parent": "/admin/_adminauth"
    }
  }
}
ROUTE_MANIFEST_END */
