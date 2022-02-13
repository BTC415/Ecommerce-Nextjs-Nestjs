import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import {
  CartActionCreators,
  OrderActionCreators,
  ProductsActionCreators,
  UserActionCreators,
} from '../state';

export const useProductsActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(ProductsActionCreators, dispatch);
  }, [dispatch]);
};

export const useCartActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(CartActionCreators, dispatch);
  }, [dispatch]);
};

export const useUserActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(UserActionCreators, dispatch);
  }, [dispatch]);
};

export const useOrderActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(OrderActionCreators, dispatch);
  }, [dispatch]);
};
