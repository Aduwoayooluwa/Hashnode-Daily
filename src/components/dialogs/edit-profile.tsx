import React, { useState } from 'react';
import Modal from '../../layout/modal';
import Button from '../shared/button';

interface EditprofileProps {
    isOpen: boolean
    closeModal: () => void
}

const EditProfile: React.FC<EditprofileProps> = ({ isOpen, closeModal }) => {
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('Profile Updated:', { fullName, bio });
  };

  return (
      <Modal isOpen={isOpen} onClose={closeModal}>
          <p className="font-semibold text-gray-100">Edit Profile</p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 bg-gray-800 shadow-md rounded">
        <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-200 text-sm font-bold mb-2">
            Full Name
            </label>
            <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>

        <div className="mb-6">
            <label htmlFor="bio" className="block text-gray-200 text-sm font-bold mb-2">
            Bio
            </label>
            <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            ></textarea>
        </div>

        <Button
            type="submit"        
        >
            Save
        </Button>
        </form>
    </Modal>
  );
};

export default EditProfile;
