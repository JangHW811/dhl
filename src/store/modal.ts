import { ReactNode, useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

const globalModalVisibleAtom = atom<boolean>({
  key: '@modal/globalModalVisibleAtom',
  default: false,
});

interface GlobalModalInfoType {
  type?: 'confirm' | 'alert';
  title?: string;
  contents?: string | ReactNode | null;
  cancelText?: string;
  confirmText?: string;
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

const globalModalInfoAtom = atom<GlobalModalInfoType | null>({
  key: '@modal/globalModalContentsAtom',
  default: null,
});

export const useGlobalModal = () => {
  const [visible, setVisible] = useRecoilState(globalModalVisibleAtom);
  const [info, setInfo] = useRecoilState(globalModalInfoAtom);

  const open = useCallback(
    (modalInfo: GlobalModalInfoType) => {
      setInfo(modalInfo);
      setVisible(true);
    },
    [setVisible, setInfo],
  );

  const close = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const resetContents = useCallback(() => {
    setInfo(null);
  }, [setInfo]);

  return {
    visible,
    setVisible,
    info,
    globalModalActions: { open, close, resetContents },
  };
};
