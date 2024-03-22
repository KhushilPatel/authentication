import React from "react";
import CheckboxLabels from "@/components/UI/Checkbox"; 

export interface ConfigurePermissionsProps {
  roleName: string;
}

const ConfigurePermissions: React.FC<ConfigurePermissionsProps> = ({
  roleName,
}) => {
  return (
    <div className="border-r-2 pr-14">
      <h2 className="bg-slate-300 p-4 font-bold">Configure</h2>
      {roleName ? (
        <CheckboxLabels roleName={roleName} />
      ) : (
        <p className="p-4 text-red-500">Please select a role to configure permissions.</p>
      )}
    </div>
  );
};

export default ConfigurePermissions;
