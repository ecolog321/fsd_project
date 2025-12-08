import { StateSchema } from 'app/providers/StoreProvider';
import { getNotificationsIsLoading } from './getNotifications';

describe('getNotifications', () => {
 test('', () => {
 const state: DeepPartial<StateSchema> = {};
 expect(getNotificationsIsLoading(state as StateSchema)).toEqual({});
 });
});