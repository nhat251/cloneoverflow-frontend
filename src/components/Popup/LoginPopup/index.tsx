import React, { useState } from 'react';
import callApi from '~/components/api/axiosConfig';
import Modal from '~/components/commons/Modal';
import { LOGIN } from '~/constants/api';

const LoginModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!userName || !password) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const data = {
      userName,
      password,
    };
    console.log(data);

    await callApi({
      path: LOGIN,
      method: 'POST',
      data: data,
    });
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Đăng nhập
      </button>

      <Modal
        isOpen={isOpen}
        title="Đăng nhập tài khoản"
        onClose={() => setIsOpen(false)}
        footer={
          <div className="flex justify-end gap-2">
            <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
              Hủy
            </button>
            <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Đăng nhập
            </button>
          </div>
        }
      >
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">userName</label>
            <input
              type="userName"
              placeholder="Nhập userName..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default LoginModal;
