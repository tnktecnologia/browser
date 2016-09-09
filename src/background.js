﻿var cryptoService = new CryptoService();
var tokenService = new TokenService();
var apiService = new ApiService(tokenService);
var userService = new UserService(tokenService, apiService);
var siteService = new SiteService(cryptoService, userService, apiService);
var folderService = new FolderService(cryptoService, userService, apiService);
var syncService = new SyncService(siteService, folderService, userService, apiService);