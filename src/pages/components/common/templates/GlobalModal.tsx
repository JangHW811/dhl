import { Modal } from 'antd';
import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useGlobalModal } from '../../../../store/modal';

const GlobalModal: FC = () => {
  const { visible, info, globalModalActions } = useGlobalModal();

  const type = useMemo<'alert' | 'confirm'>(() => {
    return info?.type || 'alert';
  }, [info?.type]);

  const title = useMemo<string>(() => {
    return info?.title || '';
  }, [info?.title]);

  const cancelText = useMemo<string>(() => {
    return info?.cancelText || '취소';
  }, [info?.cancelText]);

  const confirmText = useMemo<string>(() => {
    return info?.confirmText || '확인';
  }, [info?.confirmText]);

  const contents = useMemo<string | ReactNode | null>(() => {
    return info?.contents || null;
  }, [info?.contents]);

  const onClickConfirm = useCallback(() => {
    info?.onClickConfirm && info?.onClickConfirm();
    globalModalActions.close();
  }, [info, globalModalActions]);

  const onClickCancel = useCallback(() => {
    info?.onClickCancel && info?.onClickCancel();
    globalModalActions.close();
  }, [info, globalModalActions]);

  const onModalHide = useCallback(() => {
    globalModalActions?.resetContents?.();
  }, [globalModalActions]);

  return (
    <Modal
      afterClose={onModalHide}
      visible={visible}
      onCancel={onClickCancel}
      onOk={onClickConfirm}
      cancelText={cancelText}
      okText={confirmText}
      cancelButtonProps={{ hidden: type === 'alert' }}>
      <Container>
        {!!title && (
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
        )}
        {!!contents && (
          <ContentContainer>
            {typeof contents === 'string' ? (
              title ? (
                <ContentText>{contents}</ContentText>
              ) : (
                <ContentBlackText>{contents}</ContentBlackText>
              )
            ) : (
              contents
            )}
          </ContentContainer>
        )}
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 24px;
`;

const TitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: NotoSansKR-Medium;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  align-items: center;
`;

const ContentText = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #949494;
`;

const ContentBlackText = styled.p`
  font-weight: 500;
  font-family: NotoSansKR-Medium;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export default GlobalModal;
