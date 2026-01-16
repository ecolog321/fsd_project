import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import i18next from 'i18next';

interface INotificationsProps {
 
}

export const fetchNotifications = createAsyncThunk<
 any,
 INotificationsProps,
 ThunkConfig<string>
>('***/notifications', async (_, thunkApi) => {
 const { extra, rejectWithValue } = thunkApi;

 try {
 const response = await extra.api.post<any>('/***', {});
 if (!response.data) throw new Error();

 return response.data;
 } catch (error) {
 console.log(error);
 return rejectWithValue(i18next.t('ERROR'));
 }
});