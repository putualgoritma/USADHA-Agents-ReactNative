export const add_to_package = (value, count) => {
  return {type: 'ADD_TO_PACKAGE', valueItem: value, count: count};
};

export const change_to_package_qty = (value, id, harga, bv, weight, typeOperator) => {
  return {
    type: 'CHANGE_TO_PACKAGE_QTY',
    valueItem: value,
    id: id,
    harga: harga,
    typeOperator: typeOperator,
    bv: bv,
    weight: weight,
  };
};

export const delete_package = (id = null) => {
  return {type: 'DELETE_PACKAGE', id: id};
};

export const delete_package_all = () => {
  return {type: 'DELETE_PACKAGE_All'};
};

export const selected_package = (id = null, value) => {
  return {type: 'SELECTED_PACKAGE', id: id, value: value};
};

export const check_out_package = () => {
  return {type: 'CHECK_OUT_PACKAGE'};
};

export const add_to_cart = (value, count) => {
  return {type: 'ADD_TO_CART', valueItem: value, count: count};
};

export const change_to_qty = (value, id, harga, typeOperator) => {
  return {
    type: 'CHANGE_TO_QTY',
    valueItem: value,
    id: id,
    harga: harga,
    typeOperator: typeOperator,
  };
};

export const delete_cart = (id = null) => {
  return {type: 'DELETE_CART', id: id};
};

export const delete_cart_all = () => {
  return {type: 'DELETE_CART_All'};
};

export const selected_cart = (id = null, value) => {
  return {type: 'SELECTED', id: id, value: value};
};

export const check_out_keranjang = () => {
  return {type: 'CHECK_OUT_KERANJANG'};
};

export const token_api = (token) => {
  return {type : 'TOKEN_API', token}
}

export const token_api_one_signal = (token) => {
  return {type : 'TOKEN_API_ONE_SIGNAL', token}
}

export const change_qty_trf_stock = (qty, data, id) => {
  return {
    type: 'CHANGE_QTY_TRF_STOCK',
    qtyItem: qty,
    id: id,
    dataItem: data,
  };
};

export const clear_cart_trf_stock = () => {
  return {type: 'CLEAR_CART_TRF_STOCK'};
};
