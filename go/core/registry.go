package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewEventEntityFunc func(client *GcalSDK, entopts map[string]any) GcalEntity

