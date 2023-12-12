import { RootState } from '@store/reducers';
import { InitDriversListState } from '@store/reducers/drivers-list';

const driversListSelector = (state: RootState): InitDriversListState => state.driversList;

export default driversListSelector;
