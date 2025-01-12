# React Router v6 Nested Route Unexpected Re-render

This repository demonstrates a subtle bug in React Router v6 involving nested routes and unexpected re-renders. When navigating to a nested route, the parent route component also re-renders, which can lead to performance issues and unexpected behavior.  The solution provided addresses this issue by optimizing route rendering.

## Bug Description
The issue occurs when a nested route is defined within a parent route using the `<Route>` component. Even when only the nested route path changes, both the parent and child components re-render.

## How to reproduce
1. Clone this repository.
2. Navigate to `/contact/1`.  Observe that both `Contact` and `ContactDetails` components log a render event.  The expected behavior is only `ContactDetails` would re-render.

## Solution
The solution utilizes the `useLocation` hook to avoid unnecessary re-renders. By checking if the location changes only to affect the nested route, the parent route is prevented from re-rendering unnecessarily.