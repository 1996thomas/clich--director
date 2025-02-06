'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

interface GyroPermissionContextType {
  permissionGranted: boolean;
  requestPermission: () => void;
}

const GyroPermissionContext = createContext<GyroPermissionContextType>({
  permissionGranted: false,
  requestPermission: () => {},
});

export const useGyroPermission = () => useContext(GyroPermissionContext);

export const GyroPermissionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [permissionGranted, setPermissionGranted] = useState(false);

  // Vérifier dans le localStorage si la permission avait déjà été accordée
  useEffect(() => {
    const stored = localStorage.getItem("gyroPermission");
    if (stored === "granted") {
      setPermissionGranted(true);
    }
  }, []);

  const requestPermission = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === "granted") {
            setPermissionGranted(true);
            localStorage.setItem("gyroPermission", "granted");
          } else {
            console.log("Permission refusée pour l'orientation");
          }
        })
        .catch((err: any) => {
          console.error("Erreur lors de la demande de permission :", err);
        });
    } else {
      // Pour les navigateurs ne nécessitant pas de permission
      setPermissionGranted(true);
      localStorage.setItem("gyroPermission", "granted");
    }
  };

  return (
    <GyroPermissionContext.Provider
      value={{ permissionGranted, requestPermission }}
    >
      {children}
    </GyroPermissionContext.Provider>
  );
};
