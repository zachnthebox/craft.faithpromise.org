<?php
/**
 * FastCGI Cache Bust plugin for Craft CMS
 *
 * FastcgiCacheBust Service
 *
 * @author    nystudio107
 * @copyright Copyright (c) 2017 nystudio107
 * @link      https://nystudio107.com
 * @package   FastcgiCacheBust
 * @since     1.0.0
 */

namespace Craft;

class FastcgiCacheBustService extends BaseApplicationComponent
{
    /**
     * Clears the entirety of the FastCGI Cache
     */
    public function clearAll()
    {
        $settings = craft()->plugins->getPlugin('fastcgicachebust')->getSettings();
        if (!empty($settings)) {
            if (!empty($settings->cachePath)) {
                $cacheDirs = explode(',', $settings->cachePath);
                foreach ($cacheDirs as $cacheDir) {
                    $cacheDir = trim($cacheDir);
                    $result = IOHelper::clearFolder($cacheDir, false);
                    Craft::log("FastCGI Cache busted: `".$cacheDir."` - ".$result, LogLevel::Info, false);
                }
            }
        }
    }
}
