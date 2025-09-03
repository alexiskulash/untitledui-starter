This is a Vite app that uses the Untitled UI design system. The Untitled UI design system is described here:

https://www.untitledui.com/react/application-ui
https://www.untitledui.com/react/integrations/vite

When using react-aria: know that react-aria Input’s onChange passes value, not event. Update all handlers to use onChange={(value) => ...} to avoid errors.

Ensure all icons actually exist in the package before using them. This list includes all the verified working icons from the @untitledui/icons package based on the actual codebase usage:

```
// ✅ Verified Working Icon Imports
// Navigation & Arrows
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowDown, 
  ArrowUp,
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ChevronSelectorVertical,
  HomeLine 
} from "@untitledui/icons";

// User Interface
import { 
  User01,
  Plus,
  Check,
  X as CloseIcon,
  XClose,
  XCircle,
  Eye,
  EyeOff,
  DotsVertical,
  Menu02,
  Share04 
} from "@untitledui/icons";

// Communication & Contact
import { 
  Mail01,
  Phone,
  Bell01,
  Calendar as CalendarIcon 
} from "@untitledui/icons";

// Financial & Business
import { 
  CurrencyDollarCircle,
  CheckCircle,
  AlertCircle,
  InfoCircle 
} from "@untitledui/icons";

// Location & Search
import { 
  MarkerPin01,
  SearchLg,
  SearchLg as SearchIcon 
} from "@untitledui/icons";

// Actions & Editing
import { 
  Edit01,
  Edit02,
  Edit03,
  Copy01,
  Trash01,
  Trash02,
  Archive,
  HelpCircle 
} from "@untitledui/icons";

// Files & Upload
import { 
  UploadCloud02,
  DownloadCloud02,
  FileCode01,
  BookOpen01,
  BookClosed 
} from "@untitledui/icons";

// Settings & Controls
import { 
  Settings01,
  LogOut01,
  LifeBuoy01,
  FilterLines,
  Placeholder,
  Clock 
} from "@untitledui/icons";

// Social & Media
import { 
  Stars02,
  PlayCircle,
  Cube01,
  Container,
  LayersTwo01,
  UsersPlus,
  ReverseLeft,
  Zap 
} from "@untitledui/icons";

❌ Icons That DON'T Exist (Avoid These)
// These will cause errors:
import { 
  Home,        // ❌ Use: HomeLine
  Mail,        // ❌ Use: Mail01  
  DollarSign,  // ❌ Use: CurrencyDollarCircle
  MapPin,      // ❌ Use: MarkerPin01
  User         // ❌ Use: User01
} from "@untitledui/icons";

// 📝 Usage Examples
// Mortgage Application Icons (Commonly Used)
// Step 1: Get Started
import { Eye, EyeOff, Mail01, Phone } from "@untitledui/icons";

// Step 2: About Your Loan  
import { CurrencyDollarCircle, MarkerPin01 } from "@untitledui/icons";

// Step 3: About You
import { Calendar, CurrencyDollarCircle, User01 } from "@untitledui/icons";

// Step 4: Review & Submit
import { CheckCircle, Edit03, AlertCircle } from "@untitledui/icons";

// Layout Navigation
import { ArrowLeft, HomeLine } from "@untitledui/icons";

// Home Screen
import { BookOpen01, Check, Copy01, Cube01, HelpCircle, ArrowRight } from "@untitledui/icons";
```

Always use these exact icon names to avoid import errors!

These are common errors I do not want to see. Fix these in advance:

* Syntax and import errors related to the wrong icon name being used (ex. SyntaxError: The requested module '/node_modules/.vite/deps/@untitledui_icons.js?v=31065ea6' does not provide an export named 'Edit')
* Icon names are incorrect - some icons don't exist with those names in the @untitledui/icons package
* SelectItem is not exported from the select module
* The onChange event handler is expecting different parameters
* Update all Input onChange handlers to use value (not e.target.value) per react-aria-components

Don't prompt me to keep going even if you have been working for awhile. Keep going until complete and fully build out what I ask you.

Ensure dark text is not used on a dark background, especially while in dark or system theme.

If I ask you to add a new page, add a link in the nav for it too.

Always replace the initial Untitled UI Vite starter kit home page with whatever I ask you to build - it is a placeholder, not a page I want to keep.

The theme should always be set to light mode unless a toggle for users to switch themes is present. Do not use system theme or dark theme until a toggle to switch themes is present in the app.
