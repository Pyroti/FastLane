import { RootState } from '@store/reducers';
import { InitDriverDetailsState } from '@store/reducers/driver-details';

const driverDetailsSelector = (state: RootState): InitDriverDetailsState => state.driverDetails;

export default driverDetailsSelector;
