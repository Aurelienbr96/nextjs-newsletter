"use client";

import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

import { ALL_USERS, USER_WITHOUT_SUBSCRIPTION } from "@/mocks/user";
import { useMemo, useState } from "react";
import { groupNewsletters } from "@/utils/array/group-newsletters.array";
import { Newsletter } from "./components/Newsletter";
import { UserDomainModel } from "@/type/user-model.domain";

const Newsletters = () => {
  const groupedNewsLetter = useMemo(() => groupNewsletters(NEWSLETTER_ITEMS), []);

  const [currentUser, setCurrentUser] = useState<UserDomainModel.UserModel>(USER_WITHOUT_SUBSCRIPTION);
  const handleOnSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newUser = ALL_USERS.find((user) => user.id === event.target.value);
    if (newUser) setCurrentUser(newUser);
  };

  if (!groupedNewsLetter) return null;

  return (
    <>
      <select className="lg:w-[250px] mt-6" onChange={handleOnSelectChange}>
        {ALL_USERS.map((user) => (
          <option key={user.firstName} value={user.id}>
            {user.firstName}
          </option>
        ))}
      </select>
      <div className="mt-6">
        {groupedNewsLetter.map((newsletters) => {
          return (
            <div className="flex flex-col mt-[61px]" key={newsletters.site}>
              <h1 className="font-bold text-title border-b-4 border-dark-red w-fit ml-6 lg:ml-0">{newsletters.site}</h1>
              <div className="flex flex-wrap">
                {newsletters.newsletters.map((newsletter) => {
                  return <Newsletter key={newsletter.id} user={currentUser} newsletter={newsletter} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Newsletters;
