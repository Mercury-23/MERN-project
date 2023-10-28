import useLanguage from '@/lang/useLanguage';
import CreateInvoiceModule from '@/modules/InvoiceModule/CreateInvoiceModule';

export default function InvoiceCreate() {
  const entity = 'invoice';
  const translate = useLanguage();
  const Labels = {
    PANEL_TITLE: translate('invoice'),
    DATATABLE_TITLE: translate('invoice_list'),
    ADD_NEW_ENTITY: translate('add_new_invoice'),
    ENTITY_NAME: translate('invoice'),
    CREATE_ENTITY: translate('save'),
    UPDATE_ENTITY: translate('update'),
    RECORD_ENTITY: translate('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <CreateInvoiceModule config={configPage} />;
}
