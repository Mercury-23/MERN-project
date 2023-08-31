import InvoiceForm from '@/modules/InvoiceModule/InvoiceForm';
import UpdateItem from '@/components/ErpPanel/UpdateItem';
import PageLoader from '@/components/PageLoader';
import { erp } from '@/redux/erp/actions';
import { ErpLayout } from '@/layout';
import { selectItemById } from '@/redux/erp/selectors';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PANEL_TITLE = 'invoice';
const dataTableTitle = 'Invoices Lists';
const ADD_NEW_ENTITY = 'Add new invoice';
const DATATABLE_TITLE = 'Invoices List';
const ENTITY_NAME = 'invoice';
const CREATE_ENTITY = 'Save invoice';
const UPDATE_ENTITY = 'Update invoice';

const config = {
  entity: 'Invoice',
  PANEL_TITLE,
  dataTableTitle,
  ENTITY_NAME,
  CREATE_ENTITY,
  ADD_NEW_ENTITY,
  UPDATE_ENTITY,
  DATATABLE_TITLE,
  // dataTableColumns,
  // searchConfig,
  // entityDisplayLabels,
};

export default function InvoiceUpdate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const item = useSelector(selectItemById(id));
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (item) {
      clearTimeout(timeoutId);
      dispatch(erp.currentAction({ actionType: 'update', data: item }));
    } else {
      // If item is undefined for more than 3 seconds, it means the
      // id was invalid and will redirect the user.

      setTimeoutId(
        setTimeout(() => {
          history.push('/invoice');
        }, 3000)
      );
    }
  }, [item]);

  useLayoutEffect(() => {
    dispatch(erp.list({ entity: 'Invoice' }));
  }, []);

  return (
    <ErpLayout>
      {item ? <UpdateItem config={config} UpdateForm={InvoiceForm} /> : <PageLoader />}
    </ErpLayout>
  );
}
