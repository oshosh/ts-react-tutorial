import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { RootState } from "../../modules";
import { getUserProfileAsync } from "./actions";

// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch, getState: () => RootState) => {
//         const state = getState()
//         console.log(state)

//         const { request, success, failure } = getUserProfileAsync;

//         dispatch(request());

//         try {
//             const userProfile = await getUserProfile(username); // api

//             dispatch(success(userProfile));
//         } catch (error: unknown) {
//             const { request } = error as AxiosError;
//             dispatch(failure(request));
//         }
//     }
// }

export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
)